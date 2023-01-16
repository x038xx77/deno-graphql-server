
import { PrismaClient } from "../libPackage.ts";

// import { config } from "https://deno.land/x/dotenv/mod.ts"; //only Debug
// const { DATABASE_URL } = config({ safe: true }); //only Debug
// const env = await config({ safe: true })
// console.log("ENV", env["DATABASE_URL"]);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      // url: DATABASE_URL
      url: Deno.env.get("DATABASE_URL"), //from prod
    },
  },
});