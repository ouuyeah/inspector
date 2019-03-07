import { prismaObjectType } from 'nexus-prisma'

export const Inspection = prismaObjectType({
  name: 'Inspection',
  definition(t) {
    t.prismaFields(['*'])
  },
})
