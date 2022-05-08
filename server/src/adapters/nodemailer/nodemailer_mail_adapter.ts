import 'dotenv/config'
import fs from 'fs'
import handlebars from 'handlebars'
import nodemailer from 'nodemailer'
import { resolve } from 'path'
import { formatToBrazilianDateTime } from '../../utils/formatDate'
import { MailAdapter, SendMailData } from '../mail_adapter'

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: Number(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, feedback } = data

    const { type, comment, screenshot, created_at } = feedback

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'sendFeedback.hbs'
    )

    const templateFileContent = fs.readFileSync(templatePath, {
      encoding: 'utf-8'
    })

    const compiledTemplate = handlebars.compile(templateFileContent)

    const templateHTML = compiledTemplate({
      type,
      comment,
      screenshot,
      created_at: formatToBrazilianDateTime(created_at)
    })

    await transport.sendMail({
      from: 'Equipe FeedGet <feedget@luiscapelletto.com>',
      to: 'Suporte FeedGet <suporte_feedget@luiscapelletto.com>',
      subject,
      html: templateHTML
    })
  }
}
