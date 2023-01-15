import { Prisma, PrismaClient, config } from "../libPackage.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

async function main() {
// 1
  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin2@test.ru",
    },
  });
// 2
await prisma.user.create({
  data: {
    name: "Oleg",
    email: "oleg@test.ru",
  },
});
//3
await prisma.user.create({
  data: {
    name: "Anna",
    email: "anna@test.ru",
  },
});

}

main().then(() => {
  console.log("Data seeded...");
});
console.log(`Seeding finished.`);

await prisma.$disconnect();