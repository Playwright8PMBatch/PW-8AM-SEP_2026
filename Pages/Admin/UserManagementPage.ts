import { Locator, Page } from '@playwright/test';

export class UserManagementPage {
    readonly page: Page;
    readonly usernameFilter: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly usersTable: Locator;
    readonly noRecordsMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameFilter = page.getByRole('textbox').nth(1);
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.usersTable = page.getByRole('table');
        this.noRecordsMessage = page.getByText('No Records Found', { exact: true }).first();
    }

    async searchByUsername(username: string): Promise<void> {
        await this.usernameFilter.fill(username);
        await this.searchButton.click();
    }

    async resetSearch(): Promise<void> {
        await this.resetButton.click();
    }
}
