import { Feedbacks } from '@prisma/client'

export interface SendMailData {
  subject: string
  feedback: Feedbacks
}

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>
}
