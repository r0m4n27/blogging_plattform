import { createPrismaClient } from "@/database";

const client = createPrismaClient();

const main = async () => {
  const siteConfig = await client.siteConfig.create({
    data: {
      blogTitle: "My AWESOME Blog Title",
      logo: Buffer.from("Test"),
      logoIcon: Buffer.from("TEST"),
    },
  });
  console.log(siteConfig);
  await client.siteConfig.create({
    data: {
      blogTitle: "My AWESOME Blog Title",
      logo: Buffer.from("Test"),
      logoIcon: Buffer.from("TEST"),
    },
  });
};

main().finally(() => client.$disconnect());
