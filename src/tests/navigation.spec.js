import {test, expect} from '@playwright/test'

test.describe("Navigation bar", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
  })

  test("go to Katalog", async ({page}) => {
    await expect( page.getByText("sidan för dig som gillar att")).toBeVisible()
    //lämna först sedan gå tillbacka
  })

  test("go to Lägg till bok", async ({page}) => {
    await page
         .getByTestId("add-book")
         .click()
    await expect(page
         .getByTestId("add-book"))
         .toBeDisabled()
         // getbytext och text från vyn
         //närmare userstories
  })

  test("go to Mina böcker", async({page}) => {
    await page
          .getByTestId("favorites")
          .click()
    await expect(page
          .getByTestId("favorites"))
          .toBeDisabled()
  })


})