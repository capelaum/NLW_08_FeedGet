import { Feedbacks } from '@prisma/client'
import { prisma } from '../../prisma'
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../feedbacks_repository'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { type, comment, screenshot } = data

    const feedback: Feedbacks = await prisma.feedbacks.create({
      data: {
        type,
        comment,
        screenshot,
      },
    })

    return feedback
  }
}
