import BottomSheet from '@gorhom/bottom-sheet'
import { ChatTeardropDots } from 'phosphor-react-native'
import React, { useRef } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { theme } from '../../theme'
import { styles } from './styles'

function WidgetComponent() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpenBottonSheet() {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpenBottonSheet}>
        <ChatTeardropDots
          weight="bold"
          size={24}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Text>Hello</Text>
      </BottomSheet>
    </>
  )
}

export const Widget = gestureHandlerRootHOC(WidgetComponent) as React.FC
