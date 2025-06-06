import {test, expect} from '@playwright/test'

const books = [
    "Hur man tappar bort sin TV-fjärr 10 gånger om dagen",
    "Min katt är min chef",
    "100 sätt att undvika måndagar",
    "Gräv där du står – och hitta en pizzameny"
  ]

test.describe("Mina Böcker", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
  })


  test("Lägg till favorit bok och gå till Mina böcker", async ({page}) => {
      // lägger till böcker i favoriter
     for (const book of books) {
     await page
          .getByTestId(`star-${book}`)
          .click()
  }

     // går till mina böcker
     await page
          .getByTestId("favorites")
          .click()
     await expect(page
          .getByText('Dina favoriter:'))
          .toBeVisible()

     // kollar att alla böcker är synliga i Mina böcker
     for (const book of books) {
     await expect(page
          .getByTestId(`fav-${book}`))
          .toBeVisible()
  }
  })
    
  test("ta bort böcker från favoriter", async ({page}) => {
     // lägg till böcker i favoriter
     for (const book of books) {
     await page
     .getByTestId(`star-${book}`)
     .click()
  }

     // tar bort böcker från favoriter
     for (const book of books) {
     await page
     .getByTestId(`star-${book}`)
     .click()
  }

     // kollar att böckerna inte är markerade som favoriter
     for (const book of books) {
     await expect(page.getByTestId(`star-${book}`))
     .not.toHaveClass(/star.selected/)
  }
    
})

})