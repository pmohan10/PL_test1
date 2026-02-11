import { expect, test } from '@playwright/test'

// beforeEach hook to run first always
test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com');
    await page.getByText('Forms').click();
})

test('1st test', async ({ page }) => {
    await page.getByText('Form Layouts').click();
})

test('Datepicker test', async ({ page }) => {   
    await page.getByText('Datepicker').click();
})

test('Locator tests', async ({ page }) => {
    await page.getByText('Form Layouts').click();
    await page.locator('#inputEmail1').fill('xyx@gmail.com');
    await page.locator('#inputPassword2').fill('somepw');
    //await page.getByRole('radio', {name: 'Option 1'}).check()  /// this not working
   // await page.getByRole('button', {name: 'Sign in'}).click()
   await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button',{name: 'Sign in'}).click()
   await page.locator('nb-card', {has: page.locator('#inputPassword2')}).getByRole('button',{name: 'Sign in'}).click()
   await page.locator('nb-card', {hasText: 'Radios'}).getByRole('button',{name: 'Sign in'}).click()
    //await page.locator('nb-card', {has: page.locator('.size-medium')})
    await page.locator('nb-card').filter({has: page.locator('#inputPassword2')})
    await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button',{name: 'Sign in'}).click()

    })

    test('assertion checks', async ({page})=> {
        await page.getByText('Form Layouts').click();

        const radioLabels = await page.locator('nb-radio').allTextContents()
        // console.log(radioLabels)
    //    expect(radioLabels).toContain('Option 1')
    })


    