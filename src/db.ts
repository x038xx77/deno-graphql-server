
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = config({ safe: true }); //only Debug
const env = await config({ safe: true })
console.log("ENV", env["DATABASE_URL"]);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.DATABASE_URL, //from prod
    },
  },
});