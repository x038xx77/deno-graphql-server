
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = await config({ safe: true }); //only Debug
const env = await config({ safe: true })
console.log("ENV", env["DATABASE_URL"], DATABASE_URL);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL, //from prod
    },
  },
});