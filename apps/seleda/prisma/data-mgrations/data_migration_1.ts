// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export const setStatusUsers = async () => {
//   const existingUsers = await prisma.user.findMany();

//   for (const user in existingUsers) {
//     await prisma.user.update({
//       where: { id: user.id },
//       data: {
//         status: "active",
//       },
//     });
//   }
// };
