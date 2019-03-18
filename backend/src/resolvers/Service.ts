import { prismaObjectType } from 'nexus-prisma'

export const Service = prismaObjectType({
  name: 'Service',
  definition(t) {
    t.prismaFields(['*'])
  },
})
