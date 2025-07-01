const { test ,expect } = require("playwright/test");

test('handle table', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const table = await page.locator("//table[@id='productTable']")

//1. Total number of rows and column 

const column= await table.locator("//thead//tr//th")
console.log("Total column: " + await column.count());

const row= await table.locator("//tbody//tr")
console.log("Total row: " + await row.count());


//2. Select checkbox for product 3

// const matchRow= row.filter({
//     has: page.locator('td'),
//     hasText: 'Smartwatch'
// })

// await matchRow.locator('input').check();


//3. Select multiple product from table using re-usable funcation 

// await selectProduct(row, page,'Smartwatch')
// await selectProduct(row, page,'Tablet')
// await selectProduct(row, page,'Laptop')
// await selectProduct(row, page,'Wireless Earbuds')


//4. print all product details using loop 

// for (let i=0; i<await row.count();i++)
// {
//         const rows= row.nth(i);
//         const tds= rows.locator('td')
        
//         for(let j=0; j<await tds.count()-1; j++)
//         {
//             console.log(await tds.nth(j).textContent());
//         }
// }


//5. read data from all pages

const totalPage= await page.locator("//ul[@id='pagination']//li//a")
console.log("total page: " + await totalPage.count());

for(let k=0; k<await totalPage.count();k++)
{
    if(k>0)
    {
        await totalPage.nth(k).click();
    }

    for (let i=0; i<await row.count();i++)
    {
            const rows= await row.nth(i);
            const tds= await rows.locator('td')
            
            for(let j=0; j<await tds.count()-1; j++)
            {
                console.log(await tds.nth(j).textContent());
            }
    }
}

await page.waitForTimeout(10000)





})


async function selectProduct (row, page, name) 
{
 const matchRow= row.filter({
    has: page.locator('td'),
    hasText: name
})
await matchRow.locator('input').check();   
}