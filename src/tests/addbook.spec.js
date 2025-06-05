import {test, expect} from '@playwright/test'

const book = {title: "Red Sister", author: "Mark Lawrence"}

test.describe("Add book", () => {
    test.beforeEach(async ({page}) => {
         await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
    })

//     test("add book to catalog", async ({page}) => {
//         await page
//               .getByTestId("add-book")
//               .click()
//         await expect(page
//               .getByTestId("add-book"))
//               .toBeDisabled()
//         await page
//               .getByTestId("add-input-title")
//               .click()
//         await page
//               .getByTestId("add-input-title")
//               .fill(book.title)
//         await page
//               .getByTestId("add-input-author")
//               .click()
//         await page
//               .getByTestId("add-input-author")
//               .fill(book.author)
//         await page
//               .getByTestId("add-submit")
//               .click()

//               //gö över kolla boken finns
//     })
    test("add book to catalog", async ({page}) => {
        await page
              .getByTestId("add-book")
              .click()
        await expect(page
              .getByTestId("add-book"))
              .toBeDisabled()
        await page
              .getByTestId("add-input-title")
              .click()
        await page
              .getByTestId("add-input-title")
              .fill(book.title)
        await page
              .getByTestId("add-input-author")
              .click()
        await page
              .getByTestId("add-input-author")
              .fill(book.author)
        await page
              .getByTestId("add-submit")
              .click()
        await page
              .getByTestId("catalog")
              .click()
        await expect(page
              .getByText(book.title, book.author))
              .toBeVisible()
    })
    // lite luft mellan rader 
    test("Check if book is not added with empty title or author", async ({page}) => {
        await page
              .getByTestId("add-book")
              .click()
        await expect(page
              .getByTestId("add-book"))
              .toBeDisabled()
        await expect(page
              .getByTestId("add-submit"))   
              .toBeDisabled()                // kollar submit är disable
        await page
              .getByTestId("add-input-author")
              .click()
        await page
              .getByTestId("add-input-author")
              .fill(book.author)
        await expect(page
              .getByTestId("add-submit"))
              .toBeDisabled()               // kollar submit är disable med author
        await page
              .getByTestId("add-input-title")
              .click()
        await page
              .getByTestId("add-input-title")
              .fill(book.title)
        await page
              .getByTestId("add-input-author")
              .click()
        await page
              .getByTestId("add-input-author")
              .fill("")                       // rensar author
        await expect(page
              .getByTestId("add-submit"))
              .toBeDisabled()               // kollar submit är disable med title
    })
})