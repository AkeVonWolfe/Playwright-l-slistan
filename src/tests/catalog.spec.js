import {test, expect} from '@playwright/test'

test.describe("Catalog", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
    })

    test("add book to favorites", async ({page}) => {
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .toBeVisible()

              //flytta över mybook
        
    })

    test ("remove book from favorites", async ({page}) => {
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .toBeVisible()
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .not.toHaveClass(/star.selected/) // hur skulle .not.toHaveCSS() med opacity ?
              
    })


})