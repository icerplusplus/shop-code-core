
const { PrismaClient } =  require("@prisma/client");
const { mockPosts } = require("./mock.js")
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "m.contact@gmail.com" },
    update: {},
    create: {
      email: "m.contact@gmail.com",
      name: "Icer Plus Plus",
      posts: {
        createMany: {
          data: mockPosts
        }
      }
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
