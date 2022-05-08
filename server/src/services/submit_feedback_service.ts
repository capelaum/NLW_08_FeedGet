import { Feedbacks } from '@prisma/client'
import { MailAdapter } from '../adapters/mail_adapter'
import { FeedbacksRepository } from '../repositories/feedbacks_repository'

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

  async execute(req: SubmitFeedbackServiceRequest): Promise<Feedbacks | null> {
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

    try {
      await this.mailAdapter.sendMail({
        subject: 'Novo Feedback ✅',
        feedback
      })
    } catch (err: unknown) {
      console.error(err)

      return null
    }

    return feedback
  }
}
