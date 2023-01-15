
import { PrismaClient, config } from "../libPackage.ts";

const envVars = await config();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});