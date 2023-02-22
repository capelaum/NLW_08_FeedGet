import { SubmitFeedbackService } from './submit_feedback_service'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const feedbackTest = {
  id: '1',
  type: 'bug',
  comment: 'test',
  screenshot: 'test',
  created_at: new Date()
}

const submitFeedbackService = new SubmitFeedbackService(
  { create: async () => feedbackTest },
  { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: 'test',
        screenshot: 'data:image/png;base64,test'
      })
    ).resolves.not.toThrow()

    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit feedback without a type', async () => {
    await expect(
      submitFeedbackService.execute({
        type: '',
        comment: 'test',
        screenshot: 'data:image/png;base64,test'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback without a comment', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,test'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback without a valid screenshot', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: 'test',
        screenshot: 'test.png'
      })
    ).rejects.toThrow()
  })
})
