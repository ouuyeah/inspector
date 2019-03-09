import { prismaObjectType } from 'nexus-prisma'

export const Collections = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createCollection'])
  },
})
