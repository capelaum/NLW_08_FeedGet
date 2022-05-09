import { Camera, Trash } from 'phosphor-react-native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { theme } from '../../theme'
import { styles } from './styles'

interface ScreenshotButtonProps {
  screenshot: string | null
  onTakeScreenshot: () => void
  onRemoveScreenshot: () => void
}

export function ScreenshotButton({
  screenshot,
  onTakeScreenshot,
  onRemoveScreenshot,
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />

          <Trash
            style={styles.removeIcon}
            weight="fill"
            size={22}
            color={theme.colors.text_secondary}
          />
        </View>
      ) : (
        <Camera weight="bold" size={32} color={theme.colors.text_primary} />
      )}
    </TouchableOpacity>
  )
}
