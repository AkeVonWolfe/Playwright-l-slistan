import {test, expect} from '@playwright/test'

const book = {title: "Red Sister", author: "Mark Lawrence"}

test.describe("Lägg till bok", () => {
    test.beforeEach(async ({page}) => {
         await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
    })

    test("Lägg till bok till favoriter", async ({page}) => {
        await page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
              .click()
        await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .toHaveClass(/star.selected/)

              //flytta över mybook     
    })

    test("Lägg till bok i katalog", async ({page}) => {
        await page
              .getByTestId("add-book")
              .click()
        await expect(page
              .getByText('Titel'))
              .toBeVisible()

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
    test("Kolla att inte lägga till bok utan titel eller författare", async ({page}) => {
        await page
              .getByTestId("add-book")
              .click()
        await expect(page
              .getByText('Titel'))
              .toBeVisible()

        await expect(page // kollar submit är disable
              .getByTestId("add-submit"))   
              .toBeDisabled()                

        await page
              .getByTestId("add-input-author")
              .click()
        await page
              .getByTestId("add-input-author")
              .fill(book.author)
        await expect(page // kollar submit är disable med author
              .getByTestId("add-submit"))
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
        await page   // rensar author
              .getByTestId("add-input-author")
              .fill("")                       

        await expect(page // kollar submit är disable med title
              .getByTestId("add-submit"))
              .toBeDisabled()               
    })
})