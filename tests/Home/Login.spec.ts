import {test, expect} from '@playwright/test'
import {LoginPage} from '../../Pages/Login/Home'

test('ornage HRM login', async({page})=>{
    const loginpage = new LoginPage(page);

    await loginpage.goto();
    await loginpage.login();
    await page.waitForTimeout(3000);
});

