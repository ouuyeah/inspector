import { getUserId } from '../utils'
import { idArg } from 'nexus'
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
    t.field('service', {
      type: 'Service',
      nullable: true,
      args: { id: idArg() },
      resolve: async (parent, { id }, ctx) => {
        const service = await ctx.prisma.service({ id })
        return service
      },
    })

    t.prismaFields(['collections'])
    t.prismaFields(['services'])
    /*
    t.list.field('feed', {
      type: 'Post',
      resolve: (parent, args, ctx) => {
        console.log('Resovle feed')
        return ctx.prisma.posts({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.posts({
          where: {
            OR: [
              { title_contains: searchString },
              { content_contains: searchString },
            ],
          },
        })
      },
    })

    t.field('post', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.post({ id })
      },
    })
    */
  },
})
