
import { PrismaClient, config } from "../libPackage.ts";


const { DATABASE_URL } = config({ safe: true }); //only Debug
const env = await config({ safe: true })
// console.log("ENV", env);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL, //from prod
    },
  },
});