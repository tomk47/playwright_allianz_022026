import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page.ts";
import { DashboardPage } from "../../../src/pages/dashboard_page.ts";
import { pmtoolTexts } from "../../../assets/pmtool_texts.ts";

test.describe("Asserts - Testing in Playwright", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage
      .open()
      .then((login) => login.fillUsername("pw_academy"))
      .then((login) => login.fillPassword("Playwright321!"))
      .then((login) => login.clickLogin());
  });

  test("toContainText Assert", async ({ page }) => {
    // ? Základní expect s lokátorem
    await expect(page.locator("#welcome-page-header")).toContainText(
      pmtoolTexts.dashboard.welcomeTitlePartial,
    );

    // ? Expect s custom message a lokátorem v const
    const welcomePageHeader = page.locator("#welcome-page-header");
    await expect(
      welcomePageHeader,
      "Welcome Page Header Contain Text",
    ).toContainText(pmtoolTexts.dashboard.welcomeTitlePartial);
  });

  test("toHaveText Assert", async ({ page }) => {
    const welcomePageHeader = page.locator("#welcome-page-header");
    await expect(welcomePageHeader, "Welcome Page Header Have Text").toHaveText(
      pmtoolTexts.dashboard.welcomeTitle,
    );
  });

  test("toHaveValue Assert", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage
      .clickProfile()
      .then((dashboard) => dashboard.clickLogout());

    const usernameInput = page.locator("#username");
    const usernameValue = "PetrTest";
    await usernameInput.fill(usernameValue);
    await expect(usernameInput, "Username Input have Value").toHaveValue(
      usernameValue,
    );
  });

  test("Soft Asserts", async ({ page }) => {
    const welcomePageHeader = page.locator("#welcome-page-header");
    await expect
      .soft(welcomePageHeader, "Welcome Page Header has Text")
      .toHaveText(pmtoolTexts.dashboard.welcomeTitlePartial);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage
      .clickProfile()
      .then((dashboard) => dashboard.clickLogout());
  });

  test("Negative Asserts", async ({ page }) => {
    const welcomePageHeader = page.locator("#welcome-page-header");
    await expect(
      welcomePageHeader,
      "Welcome Page Header does not have Text",
    ).not.toContainText(pmtoolTexts.general.errorText);
  });

test("Page Objects Asserts", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.pageHeaderHasText(pmtoolTexts.login.pageHeader));
});
});
