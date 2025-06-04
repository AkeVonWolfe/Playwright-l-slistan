import {test, expect} from '@playwright/test';

test.describe("Navigation bar", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
  })

  test("go to Katalog", async ({page}) => {
    await expect( page.getByText('sidan för dig som gillar att')).toBeVisible()
  })
})