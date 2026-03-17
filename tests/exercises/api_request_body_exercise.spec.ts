import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Exercise: POST Request Body", async ({ request }) => {
  const username = faker.internet.username();

  await request.post("https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
{
    data: {
//    username: faker.internet.username(),
    username,
    password: "123456",
    email: "Addison_Emard@example.net"
  }
}
  );
});