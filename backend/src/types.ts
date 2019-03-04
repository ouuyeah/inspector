import { Prisma } from './generated/prisma-client'
import { response, request } from 'express'

export interface Context {
  prisma: Prisma
  request: any
  response: any
}
