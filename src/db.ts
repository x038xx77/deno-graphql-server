
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = config();


export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});