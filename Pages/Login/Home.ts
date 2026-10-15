import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly usernameinput:Locator;
    readonly passwordinput:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameinput = page.getByPlaceholder('Username');
        this.passwordinput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

async goto(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        waitUntil: 'commit',
    });
    // await this.page.goto(process.env.QA_SIT_URL);
}

async login(){
    const username = process.env.QA_USERNAME;
    const password = process.env.QA_PASSWORD;

    if (!username || !password) {
        throw new Error('QA_USERNAME and QA_PASSWORD must be configured');
    }

    await this.usernameinput.fill(username);
    await this.passwordinput.fill(password);
    await this.loginButton.click();
}
}
