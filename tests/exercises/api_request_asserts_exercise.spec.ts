import { expect, test } from "@playwright/test";

/***
test("Exercise: API Asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4",
  );
  const responseBody = await response.json();
  console.log(responseBody); // * Jen pro ukázku, v reálném testu bychom nepoužili

  // * Kontroly (Asserty)
  // ? Existence klíče v responseBody
  expect.soft(responseBody.userId, "responseBody.userId is defined").toBeDefined();
//  expect
  //  .soft(responseBody, "responseBody have property message")
    //.toHaveProperty("message");

  // ? Kontrola datového typu
  expect
    .soft(typeof responseBody.active, "responseBody.active is a number")
    .toBe("number");

  // ? Kontrola správnosti dat
  expect
    .soft(responseBody.username, "responseBody.username have text")
    .toBe("petrfifka");
  expect
    .soft(responseBody.username, "responseBody.username contain text")
    .toContain("fif");
});
***/

test("Exercise: API Asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4",
  );
  const responseBody = await response.json();

  expect(responseBody.userId, "responseBody.userId is defined").toBeDefined();
  expect(typeof responseBody.active, "responseBody.active is a number").toBe(
    "number",
  );
  expect(responseBody.username, "responseBody.username have a text").toBe(
    "petrfifka",
  );
});
