import { Context } from '../libPackage.ts'
import { prisma } from './db.ts';
import {authenticateUser} from './auth.ts'
import { User } from '../generated/client/deno/index.d.ts';

export async function authUserContext(request:any):Promise<User|null> {
  return await authenticateUser(request)
}

export const context = (ctxRequest: Context) => ({
    currentUser: authUserContext(ctxRequest.request),
    prisma: prisma
  });