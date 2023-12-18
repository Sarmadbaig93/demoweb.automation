import test, {Page, expect} from '@playwright/test'
test('assertion demo', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await expect(page.getByRole('heading', {name:'Login'})).toHaveText('Login')
    await page.pause()
    await expect(page.getByText('username')).toHaveCount(2)
    await page.pause()
    await expect(page.getByText('password')).toHaveCount(3)
    await page.pause()

}
)
