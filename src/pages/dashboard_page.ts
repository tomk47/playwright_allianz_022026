// src/pages/pmtool/dashboard_page.ts

import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  // readonly url = "https://tredgate.com/pmtool/";
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly alertIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.alertIcon = page.locator("#user_notifications_report");
  }

  // Při vytváření metod doporučím přístup začít s atomickými (malými) metodami s jedním krokem a pak vytvářet sdružující metody
  // Například: fillUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody například pro preconditions jiných testů

  async clickProfile() {
    await expect(this.alertIcon).toBeVisible(); // ? Počká na zobrazení alert ikony - kvůli plnému načtení stránky
    await this.profileButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  // Sloučená (group) metoda -> slučuje jednotlivé kroky pro testy, které jen proletí přihlášením a nepotřebují ho testovat
  async logout() {
    await this.clickProfile();
    await this.clickLogout();
  }
}