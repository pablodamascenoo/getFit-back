import client from "../src/config/database.js";
import bcrypt from "bcrypt";

async function main() {
  await client.$executeRaw`TRUNCATE TABLE users CASCADE`;

  await client.user.create({
    data: {
      email: "test@gmail.com",
      name: "testman",
      password: bcrypt.hashSync("12345", 10),
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
