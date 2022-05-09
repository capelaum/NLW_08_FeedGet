import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Button } from '../Button'
import { Copyright } from '../Copyright'
import { ScreenshotButton } from '../ScreenshotButton'
import { FeedbackType } from '../Widget'
import { styles } from './styles'

interface FormProps {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: FormProps) {
  const { title, image, placeholder } = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeScreenshot={() => {}}
          onRemoveScreenshot={() => {}}
          screenshot="https://github.com/capelaum.png"
        />

        <Button isLoading={false} />
      </View>
      <Copyright />
    </View>
  )
}
