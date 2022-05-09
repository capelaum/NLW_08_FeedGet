import * as FileSystem from 'expo-file-system'
import { ArrowLeft } from 'phosphor-react-native'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { captureScreen } from 'react-native-view-shot'
import { api } from '../../services/api'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Button } from '../Button'
import { Copyright } from '../Copyright'
import { ScreenshotButton } from '../ScreenshotButton'
import { FeedbackType } from '../Widget'
import { styles } from './styles'
interface FormProps {
  feedbackType: FeedbackType
  onFeedbackCancelled: () => void
  onFeedbackSent: () => void
}

export function Form({
  feedbackType,
  onFeedbackCancelled,
  onFeedbackSent,
}: FormProps) {
  const { title, image, placeholder } = feedbackTypes[feedbackType]

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState('')

  async function handleTakeScreenshot() {
    const uri = await captureScreen({
      format: 'jpg',
      quality: 0.8,
    })

    setScreenshot(uri)
  }

  function handleRemoveScreenshot() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if (isSendingFeedback || comment.trim().length === 0) {
      return
    }

    setIsSendingFeedback(true)

    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' }))

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      })

      onFeedbackSent()
    } catch (error) {
      console.error(error)

      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCancelled}>
          <ArrowLeft
            weight="bold"
            size={24}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        autoCorrect={false}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeScreenshot={handleTakeScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot}
          screenshot={screenshot}
        />

        <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
      </View>
      <Copyright />
    </View>
  )
}
