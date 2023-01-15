
import { PrismaClient } from "../libPackage.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { DATABASE_URL } = config({ safe: true }); //only Debug
// const env = await config({ safe: true })
// console.log("ENV", env["DATABASE_URL"]);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATABASE_URL"), //from prod
    },
  },
});