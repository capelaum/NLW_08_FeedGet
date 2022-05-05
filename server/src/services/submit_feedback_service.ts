import { Feedback } from '@prisma/client'
import { MailAdapter } from '../adapters/mail_adapter'
import { FeedbacksRepository } from '../repositories/feedbacks_repository'
import { formatToBrazilianDateTime } from '../utils/formatDate'

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(req: SubmitFeedbackServiceRequest): Promise<Feedback> {
    const feedback = await this.feedbacksRepository.create(req)

    const { type, comment, screenshot, created_at } = feedback

    await this.mailAdapter.sendMail({
      subject: 'Seu Feedback foi recebido com sucesso ✅',
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
        `<h1>Feedback recebido com sucesso!</h1>`,
        `<p><strong>Tipo</strong>: ${type}</p>`,
        `<p><strong>Comentário</strong>: ${comment}</p>`,
        `<p><strong>Screenshot</strong>: ${screenshot}</p>`,
        `<p><strong>Created in</strong>: ${formatToBrazilianDateTime(
          created_at
        )}</p>`,
        `<p>Obrigado por nos ajudar a melhorar o nosso app!</p>`,
        `</div>`,
      ].join('\n'),
    })

    return feedback
  }
}
