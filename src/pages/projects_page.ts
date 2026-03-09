import { expect, Locator, Page } from "@playwright/test";
import { CreateNewProjectModal } from "./projects/create_new_project_modal";
/***
export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator("#user_dropdown");
  }
  
    async clickaddProject() {
      await this.addProjectButton.click();
      return new CreateNewProjectModal(this.page);
}
}
***/

export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Locator;
  readonly projectsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator('[test_id="Add Project"]');
    this.projectsTable = page.locator("#slimScroll table");
  }

  async clickAddProject() {
    await expect(
      this.projectsTable,
      "Wait until Projects Table is visible",
    ).toBeVisible();
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}