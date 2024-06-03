import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.products.deleteMany();
    const email = faker.internet.email(
      "ishan",
      "manandhar",
      "example.fakerjs.dev"
    );

    // cleanup the existing database
    await prisma.user.delete({ where: { email } }).catch(() => {
      // delete existing user found with same email
    });

    await prisma.user.create({
      data: {
        name: "ishan",
      },
    });

    console.log(`Database has been seeded. 🌱`);
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});
