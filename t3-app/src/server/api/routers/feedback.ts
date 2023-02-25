import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const feedbackRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.feedbacks.findMany()
  }),

  count: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.feedbacks.count()
  }),

  create: publicProcedure
    .input(
      z.object({
        type: z
          .string()
          .min(1, 'O tipo deve ter no mínimo 1 caractere.')
          .max(255, 'O tipo deve ter no máximo 255 caracteres.'),
        comment: z
          .string()
          .min(3, 'O comentário deve ter no mínimo 3 caracteres.')
          .max(255, 'O comentário deve ter no máximo 255 caracteres.'),
        screenshot: z
          .string()
          .min(1, 'A imagem deve ter no mínimo 1 caractere.')
          .regex(/^data:image\/png;base64,/)
          .optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.feedbacks.create({
        data: {
          type: input.type,
          comment: input.comment,
          screenshot: input.screenshot,
        },
      })
    }),
})
