import {Locator, test} from '@playwright/test'

test.beforeEach(async ({page})=> {
  await page.goto('https://playground.bondaracademy.com');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click()
})

// test('1st test', ({page})=> {
//     page.goto('https://playground.bondaracademy.com');
// })

test('title check', async ({ page }) => {
  
  page.locator('input');
  await page.locator('input[placeholder="Jane Doe"]').fill('xyz')
  await page.locator('nb-card', {hasText: 'Using the Grid'}).getByText('Using the Grid')
  await page.locator('nb-card').locator('nb-radio').getByText('Option 1').check()
  await page.locator('nb-card nb-radio').getByText('Option 1').check()
  await page.locator('nb-card').locator('nb-radio').getByText('Option 2').check()
  //await page.locator('nb-card nb-radio').getByRole('button', {name: 'Sign in'}).click()
  //await page.locator('nb-card nb-radio').filter({hasText: 'Sign in'}).click()
  await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'})

  //await page.getByRole('radio',{name: 'Option 1'}).check()
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
 // page.pause();

});

test('all elements', async ({ page }) => {
  //Inline Form elem's
  await page.locator('[placeholder="Jane Doe"]').fill('me and You')
  await page.locator('nb-card', {hasText: 'Inline form'}).locator('[placeholder="Email"]').fill('sjk@jil.com')
  //await page.locator('nb-card', {hasText: 'Inline form'}).locator('.text')
  await page.locator('nb-card', {hasText: 'Inline form'}).getByText('Remember me').check()
  await page.locator('nb-card', {hasText: 'Inline form'}).getByText('Submit').click()

  // Using the Grid section elements
  await page.locator('#inputEmail1').fill('zebra@zoo.com')
  await page.locator('#inputPassword2').fill('weare')
 // await page.getByRole('radio', {name:'Option 1'}).check()
  await page.locator('nb-card nb-radio').getByText('Option 1').check()
  await page.locator('nb-card nb-radio :text-is("Option 1")')
  await page.locator('nb-card nb-radio', {hasText: 'Option 2'})
  await page.locator('Option 2')
  await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click()
  await page.locator('nb-card').filter({hasText: 'Using the Grid'})
  
  // Basic form elem's
  let basicFormLoc: Locator = page.locator('nb-card', {hasText: 'Basic form'})
  await basicFormLoc.getByRole('textbox', {name: 'Email'}).fill('sss@yah.com')
  await basicFormLoc.getByRole('textbox', {name: 'Password'}).fill('1234')
  await basicFormLoc.getByText('Check me out').check()
  await basicFormLoc.getByRole('button', {name: 'Submit'}).click()

  // Form w/o Labels elem's
  await page.locator('[placeholder="Recipients"]').fill('xyzz')

});

