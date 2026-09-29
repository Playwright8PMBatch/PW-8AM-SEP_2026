import{test, expect} from '@playwright/test'

test('non assertions exmaples', async({page})=>{
    let sal = 10000;
    expect(sal).toBe(10000);  //exact value comparision

    // toEqual()
    let empid = [10,20,30];
    expect(empid).toEqual([10,20,30]);

});

