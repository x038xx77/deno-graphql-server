
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = config({ safe: true }); //only Debug


export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_URL"), //from prod
    },
  },
});