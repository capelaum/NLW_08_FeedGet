import { Feedbacks } from '@prisma/client'
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

  async execute(req: SubmitFeedbackServiceRequest): Promise<Feedbacks> {
    if (!req.type) {
      throw new Error('Type is required')
    }

    if (!req.comment) {
      throw new Error('Comment is required')
    }

    if (req.screenshot && !req.screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Screenshot must be a base64 encoded PNG image')
    }

    const feedback = await this.feedbacksRepository.create(req)
    const { type, comment, screenshot, created_at } = feedback

    await this.mailAdapter.sendMail({
      subject: 'Seu Feedback foi recebido com sucesso ✅',
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
        `<h1>Feedback recebido com sucesso!</h1>`,
        `<p><strong>Tipo</strong>: ${type}</p>`,
        `<p><strong>Comentário</strong>: ${comment}</p>`,
        `<p><strong>Criado em</strong>: ${formatToBrazilianDateTime(
          created_at
        )}</p>`,
        screenshot
          ? `<img src="${screenshot}" alt="Screenshot ${comment}" style="width: 500px;" />`
          : null,
        `</div>`
      ].join('\n')
    })

    return feedback
  }
}
