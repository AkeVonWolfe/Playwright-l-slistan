import {test, expect} from '@playwright/test'

test.describe("My books", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://tap-ht24-testverktyg.github.io/exam-template/")
  })


  test("add favorite book and go to favorite Mina böcker", async ({page}) => {
    await page
         .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
         .click()
    await page
         .getByTestId("star-Min katt är min chef")
         .click()
    await page
         .getByTestId("star-100 sätt att undvika måndagar")
         .click()
    await page
         .getByTestId("star-Gräv där du står – och hitta en pizzameny")  // lägger till massa böcker
         .click()

    await page
          .getByTestId("favorites")   // gå till min boklista
          .click()
    await expect(page
          .getByTestId("favorites"))
          .toBeDisabled()    
                  // kanske inte behövs
    await expect(page
          .getByTestId("fav-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
          .toBeVisible()
    await expect(page
          .getByTestId("fav-Min katt är min chef"))
          .toBeVisible()
    await expect(page
          .getByTestId("fav-100 sätt att undvika måndagar"))
          .toBeVisible()
    await expect(page
          .getByTestId("fav-Gräv där du står – och hitta en pizzameny"))
          .toBeVisible()             // kollar att alla böcker finns i min boklista
  })
    
  test("remove book from favorites", async ({page}) => {
    await page
         .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
         .click()
    await page
         .getByTestId("star-Min katt är min chef")
         .click()
    await page
         .getByTestId("star-100 sätt att undvika måndagar")
         .click()
    await page
         .getByTestId("star-Gräv där du står – och hitta en pizzameny")  // lägger till massa böcker
         .click()
         
    await page
         .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
         .click()
    await page
         .getByTestId("star-Min katt är min chef")
         .click()
    await page
         .getByTestId("star-100 sätt att undvika måndagar")
         .click()
    await page
         .getByTestId("star-Gräv där du står – och hitta en pizzameny")  // lägger till massa böcker
         .click()
    await expect(page
              .getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen"))
              .not.toHaveClass(/star.selected/)
    await expect(page
              .getByTestId("star-Min katt är min chef"))
              .not.toHaveClass(/star.selected/)
    await expect(page
              .getByTestId("star-100 sätt att undvika måndagar"))
              .not.toHaveClass(/star.selected/)
    await expect(page
              .getByTestId("star-Gräv där du står – och hitta en pizzameny"))
              .not.toHaveClass(/star.selected/)            // kollar att alla böcker är borttagna från min boklista
    
})

})