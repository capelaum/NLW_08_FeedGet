export interface SendMailData {
  subject: string
  html: string
}

export interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>
}
