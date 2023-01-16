import { PrismaClient, User } from '../generated/client/deno/edge.ts'

import { authenticateUser } from './auth.ts'
import { prisma } from './db.ts'
 const db:any =prisma
export type GraphQLContext = {
  prisma: PrismaClient
  currentUser: null | User
}
 
export async function authContext(
  initialContext: any
): Promise<GraphQLContext> {

  const authUser  = await authenticateUser(db, initialContext.request ) 
  return {
    prisma:db as any,
    currentUser: authUser,
    
  }
}