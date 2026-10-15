import { expect, test } from '@playwright/test';
import { LoginPage } from '../../Pages/Login/Home';
import { UserManagementPage } from '../../Pages/Admin/UserManagementPage';

test.describe('Admin user management', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login();
        await expect(page).toHaveURL(/\/dashboard\/index$/);

        await page.getByRole('link', { name: 'Admin', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    });

    test('filters the user list by username', async ({ page }) => {
        const userManagementPage = new UserManagementPage(page);

        await userManagementPage.searchByUsername('Admin');

        const resultRows = userManagementPage.usersTable.getByRole('row');
        await expect(resultRows).toHaveCount(2);
        await expect(resultRows.nth(1).getByRole('cell').nth(1)).toHaveText('Admin');
        await expect(resultRows.nth(1).getByRole('cell').nth(4)).toHaveText('Enabled');
    });

    test('shows an empty state when no username matches', async ({ page }) => {
        const userManagementPage = new UserManagementPage(page);

        await userManagementPage.searchByUsername('no_such_user_20261014');

        await expect(userManagementPage.noRecordsMessage).toBeVisible();
        await expect(userManagementPage.usersTable.getByRole('row')).toHaveCount(1);
    });

    test('reset clears the username filter and restores the user list', async ({ page }) => {
        const userManagementPage = new UserManagementPage(page);

        await userManagementPage.searchByUsername('Admin');
        await expect(userManagementPage.usersTable.getByRole('row')).toHaveCount(2);

        await userManagementPage.resetSearch();

        await expect(userManagementPage.usernameFilter).toHaveValue('');
        await expect(userManagementPage.usersTable.getByRole('row').nth(1)).toBeVisible();
    });
});