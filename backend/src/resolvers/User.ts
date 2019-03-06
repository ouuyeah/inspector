import { prismaObjectType } from 'nexus-prisma'

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields([
      'id',
      'name',
      'email',
      'nickname',
      'cc',
      'permissions',
      {
        name: 'inspections',
        args: [],
      },
    ])
  },
})
