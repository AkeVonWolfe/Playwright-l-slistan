import {test, expect} from '@playwright/test'

test.describe("Navigation bar", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
  })

  test("go to Katalog", async ({page}) => {
    await page.getByTestId('add-book').click()
    await page.getByTestId('catalog').click()
    await page.getByText('❤️"Hur man tappar bort sin TV').click()
  })

  test("go to Lägg till bok", async ({page}) => {
    await page
         .getByTestId("add-book")
         .click()
    await expect(page
         .getByText('Titel'))
         .toBeVisible()

  })

  test("go to Mina böcker", async({page}) => {
    await page
          .getByTestId("favorites")
          .click()
    await expect(page
          .getByText('När du valt, kommer dina'))
          .toBeVisible()

  })


})