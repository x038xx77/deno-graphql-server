
import { PrismaClient, config } from "../libPackage.ts";

const envVars = await config();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "prisma://aws-us-east-1.prisma-data.com/?api_key=eXRONbDtIGZiX5vbzP3i9iJDu4mgINZL1YrDChZDrUw4Egn4eqOsqw1j4FQGEx1t",
    },
  },
});