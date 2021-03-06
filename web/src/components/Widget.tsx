import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col items-end z-20">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        className="
        bg-brand-500 rounded-full
          px-3 h-12 text-white
          flex items-center group
        "
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span
          className="
            max-w-0 overflow-hidden
            group-hover:max-w-xs
            transition-all duration-500 ease-linear
            text-lg
          "
        >
          <span className="pl-1"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
