import {test, expect} from '@playwright/test'

test.describe("Katalog", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
    })

    test ("tar bort bock from favorite", async ({page}) => {
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .toHaveClass(/star.selected/)
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .not.toHaveClass(/star.selected/) // hur skulle .not.toHaveCSS() med opacity ?
              
    })


})