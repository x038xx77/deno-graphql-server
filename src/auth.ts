// deno-lint-ignore-file
import {  jwtVerify } from '../libPackage.ts'
import { PrismaClient, User } from '../generated/client/deno/edge.ts'
import { ACCESS_TOKEN_APP_SECRET } from './constants.ts'
import { prisma } from "./db.ts";


export async function authenticateUser(
  request: Request
):Promise<User|null> {

  // console.log("REC,",request.headers.get("authorization")?.split(" "))
  const headerToken:string|null = request.headers.get('authorization');
   
  if (headerToken !== null && headerToken !== undefined) {
    const token:string = headerToken.split(' ')[1];
    let tokenPayload: any;
    try {
      tokenPayload = await jwtVerify(token, ACCESS_TOKEN_APP_SECRET, "HS512");
    } catch { console.log('Invalid token'); }

    let userVerify:any = null;
    try {
      const userIdVerify:any = tokenPayload.userId;
      userVerify = await prisma.user.findUnique({ where: { id: userIdVerify } });

    } catch (error){ console.log("Error userIdVerify", error) }
    return userVerify;
  }
  return null;
}
