import {expect,test} from '@playwright/test'

test('LocatingMultipleElements', async({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    // const links=await page.$$('a');

    // for(const link of links){

    //     const textlink=await link.textContent();
    //     console.log(textlink);

    // }

   await  page.waitForSelector("//div[@id='tbodyid']//h4//a");

    const products=await page.$$("//div[@id='tbodyid']//h4//a");    
   

    for(const product of products){

       const productText= await product.textContent();
       console.log("product are: "+productText);

    }

  


})