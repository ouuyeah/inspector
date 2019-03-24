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

    t.field('createServiceStart', {
      type: 'Service',
      args: {
        source: stringArg(),
        state: arg({ type: 'ServiceState' }),
        licensePlate: stringArg(),
        record: stringArg({ nullable: true }),
      },
      resolve: (parent, { source, record, licensePlate }, ctx) => {
        const userId = getUserId(ctx)
        const license = licensePlate.toLocaleUpperCase()
        return ctx.prisma.createService({
          record,
          state: 'PROCESS',
          licensePlate: license,
          user: { connect: { id: userId } },
          source: { connect: { id: source } },
        })
      },
    })
  },
})
