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
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}

async login(){
    console.log("QA_USERNAME:", process.env.QA_USERNAME);
    console.log("QA_PASSWORD:", process.env.QA_PASSWORD);

    await this.usernameinput.fill(process.env.QA_USERNAME ?? '');
    await this.passwordinput.fill(process.env.QA_PASSWORD ?? '');
    await this.loginButton.click();
}
}

