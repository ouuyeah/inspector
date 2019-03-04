import { verify } from 'jsonwebtoken'
import { Context } from './types'

export const APP_SECRET = process.env.APP_SECRET

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const { token } = context.request.cookies
  if (token) {
    const verifiedToken = verify(token, process.env.APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}
