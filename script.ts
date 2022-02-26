import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  const result = await prisma.user.upsert({
    where: {
      name: "Derock",
    },

    update: {
      bio: "cool person",
    },

    create: {
      name: "Derock",
      bio: "cool person",
      email: "email@person.com",
    },
  });
  console.log(result);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
