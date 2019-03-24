import { getUserId } from '../utils'
import { prismaObjectType } from 'nexus-prisma'

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        console.log(userId)

        if (!userId) {
          return null
        }
        return ctx.prisma.user({ id: userId })
      },
    })

    t.prismaFields(['services'])
  },
})
