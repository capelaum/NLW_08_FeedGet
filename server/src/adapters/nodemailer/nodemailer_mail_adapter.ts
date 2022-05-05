import 'dotenv/config'
import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail_adapter'

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: Number(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!,
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, html } = data

    await transport.sendMail({
      from: 'Equipe FeedGet <contato@feedget.com>',
      to: 'Luís V. Capelletto <capelaum@gmail.com>',
      subject,
      html,
    })
  }
}
