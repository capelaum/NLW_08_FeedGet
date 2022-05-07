import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer_mail_adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma_feedbacks_repository'
import { SubmitFeedbackService } from './services/submit_feedback_service'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  try {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailadapter = new NodemailerMailAdapter()

    const submitFeedbackService = new SubmitFeedbackService(
      prismaFeedbacksRepository,
      nodemailerMailadapter
    )

    const feedback = await submitFeedbackService.execute({
      type,
      comment,
      screenshot,
    })

    return res.status(201).json({ data: feedback })
  } catch (err) {
    console.error(err)

    return res.status(500).send()
  }
})
