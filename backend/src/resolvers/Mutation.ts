import { stringArg, idArg, arg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { hash, compare } from 'bcrypt'
import { getUserId } from '../utils'
import { sign } from 'jsonwebtoken'

export const Mutation = prismaObjectType({
  name: 'Mutation',

  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({ nullable: true }),
        cc: stringArg(),
        email: stringArg(),
        nickname: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { name, email, nickname, cc, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.createUser({
          name,
          email,
          nickname,
          cc,
          password: hashedPassword,
          permissions: { set: ['DRIVER'] },
        })
        const token = sign({ userId: user.id }, process.env.APP_SECRET)

        // We set the jwt as a cookie on the response
        /*
        ctx.response.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        })
        */

        return {
          token,
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }

        const token = sign({ userId: user.id }, process.env.APP_SECRET)
        console.log(user.id)

        // We set the jwt as a cookie on the response
        context.response.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        })

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET),
          user,
        }
      },
    })

    t.field('signout', {
      type: 'AuthPayload',
      nullable: true,
      resolve: (parent, args, ctx) => {
        ctx.response.clearCookie('token')
        return { message: 'Goodbye !' }
      },
    })

    t.field('createService', {
      type: 'Service',
      args: {
        source: stringArg(),
        licensePlate: stringArg(),
        record: stringArg({ nullable: true }),
      },
      resolve: (parent, { source, record, licensePlate }, ctx) => {
        const userId = getUserId(ctx)
        const license = licensePlate.toLocaleUpperCase()
        return ctx.prisma.createService({
          record,
          licensePlate: license,
          user: { connect: { id: userId } },
          source: { connect: { id: source } },
        })
      },
    })

    t.field('upsertCollection', {
      type: 'Collection',
      args: {
        id: idArg(),
        name: stringArg(),
        type: arg({ type: 'CollectionType' }),
      },
      resolve: (parent, { id, name, type }, ctx) => {
        const userId = getUserId(ctx)
        console.log(id)
        const iD = id || '5c871366c9e77c0000000000'
        console.log(iD)
        return ctx.prisma.upsertCollection({
          where: { id: iD },
          create: {
            name,
            type,
            user: { connect: { id: userId } },
          },
          update: {
            name,
            user: { connect: { id: userId } },
          },
        })
      },
    })

    t.prismaFields(['upsertService'])

    /*


    t.field('deletePost', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deletePost({ id })
      },
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.updatePost({
          where: { id },
          data: { published: true },
        })
      },
    })
    */
  },
})
