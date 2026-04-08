import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/login_page.ts";
import { pmtoolTexts } from "../../assets/pmtool_texts.ts";

test("Exercise: Page Objects Asserts", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage
    .open()
    .then((login) => login.login("pw_academy", "Playwright321!"))
    .then((dashboard) => dashboard.assertDashboard(pmtoolTexts.dashboard.appName));
});