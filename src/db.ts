
import { PrismaClient } from "../libPackage.ts";
import { DATABASE_URL } from './constants.ts';


export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL
    },
  },
});