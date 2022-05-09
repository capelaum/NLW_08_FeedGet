import BottomSheet from '@gorhom/bottom-sheet'
import { ChatTeardropDots } from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Form } from '../Form'
import { Options } from '../Options'
import { Success } from '../Success'
import { styles } from './styles'

export type FeedbackType = keyof typeof feedbackTypes

function WidgetComponent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpenBottonSheet() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  function handleFeedbackSent() {
    setFeedbackSent(true)
  }

  function renderContent() {
    if (feedbackSent) {
      return <Success onFeedbackRestart={handleRestartFeedback} />
    }

    if (feedbackType) {
      return (
        <Form
          feedbackType={feedbackType}
          onFeedbackCancelled={handleRestartFeedback}
          onFeedbackSent={handleFeedbackSent}
        />
      )
    }

    return <Options onFeedbackTypeChanged={setFeedbackType} />
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
        {renderContent()}
      </BottomSheet>
    </>
  )
}

export const Widget = gestureHandlerRootHOC(WidgetComponent) as React.FC
