import {test, expect} from '@playwright/test'

test('donwload file', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/file-download.php');

// enter text, click generate file, cick download file

    await page.getByPlaceholder('Type your text here...').fill("Playwright Automation");
    await page.getByRole('button',{name:'Generate File'}).click();
    await expect(page.getByText("Download File")).toBeVisible();

    // wait download event:
    const downloadele = page.waitForEvent('download');
    console.log('&&&&&&&& download&&&&&&&&:', downloadele);

    // click on DownloadFile
    await page.getByText('Download File').click();

    let download = await downloadele;
    console.log(await download.suggestedFilename());

    // save file Dir
    await download.saveAs('downloads/donwloadfile.txt');
    console.log(await download.path());
    await page.waitForTimeout(5000);
});

test('uploadfile - Browse File', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/file-upload.php');
    
    // goto file
    const BrowseFile = page.locator('#fileInput');

    // upload file
    await BrowseFile.setInputFiles('data/Para.xlsx');

    // verify file uploaded or not
    await expect(page.locator('#fileInfo')).toHaveText('Selected File: Para.xlsx & File Size is 10.64 KB');

    await page.waitForTimeout(5000);
});

test('uploadfile - Choose File', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    
    // goto file
    const ChooseFile = page.locator('#file-upload');

    // choose file
    await ChooseFile.setInputFiles('data/Para.xlsx');

    // upload the file
    await page.locator('#file-submit').click();

    // verify file uploaded or not
    await expect(page.locator('#uploaded-files')).toHaveText('Para.xlsx');

    await page.waitForTimeout(5000);
});


test("upload file using open button", async({page})=>{
    await page.goto('https://sampleapp.tricentis.com/101/app.php');
    await page.locator('#enterinsurantdata').click();
    
    // wait for filechoose
   const file= page.waitForEvent('filechooser');

    await page.locator('#open').click();

    const filechooser  =  await file;
    await filechooser.setFiles('data/para.xlsx');
});

