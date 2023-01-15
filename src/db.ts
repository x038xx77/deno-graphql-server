
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = config({ safe: true });


export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});