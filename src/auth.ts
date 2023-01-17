// deno-lint-ignore-file
// import {  jwtVerify } from '../libPackage.ts'
// import { PrismaClient, User } from '../generated/client/deno/edge.ts'
// import { ACCESS_TOKEN_APP_SECRET } from './constants.ts'
// import { prisma } from "./db.ts";
import { PrismaClient, User } from '../generated/client/deno/edge.ts'

import {  jwtVerify } from '../libPackage.ts'

import { ACCESS_TOKEN_APP_SECRET, APP_SECRET_EXPIRATION_DATATIME } from './constants.ts'



export async function authenticateUser(
  prisma: PrismaClient,
  request: any
): Promise<User | null> {
  const headerToken = request.headers?.get('authorization');
 

  if (headerToken !== null && headerToken !== undefined) {
    const token = headerToken.split(' ')[1];
    let tokenPayload: any = { email: "ya@ho.ho" };
    try {
      tokenPayload = jwtVerify(token, ACCESS_TOKEN_APP_SECRET!, "HS512") as any;
    } catch { console.log('Invalid token'); }

    let userVerify = null;
    try {
      let userIdVerify = tokenPayload.userId;
      userVerify = await prisma.user.findUnique({ where: { id: userIdVerify } });
    } catch {
  }
    return userVerify;
  }
  return null;
}