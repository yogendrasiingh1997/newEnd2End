const { test, expect } = require("playwright/test");


test.beforeAll(async()=>
{
  console.log('this is beforeall hook')  
})

test.afterAll(async()=>
{
  console.log('this is afterall hook')  
})


test.beforeEach(async()=>
{
  console.log('this is beforeeach hook')  
})

test.afterEach(async()=>
{
  console.log('this is aftereach hook')  
})



    test.describe('Group 1', ()=>
{
        test('Test 1', async ({page})=>{
        console.log("This is Test 1")

    })

    test('Test 2', async ({page})=>{
        console.log("This is Test 2")

    })
})


test.describe('Group 2', ()=>
{
    test('Test 3', async ({page})=>{
        console.log("This is Test 3")

    })

    test('Test 4', async ({page})=>{
        console.log("This is Test 4")

    })
})


//to run only specific group used only 

test.describe('Group 3', ()=>
{
    test('Test 5', async ({page})=>{
        console.log("This is Test 5")

    })

    test('Test 6', async ({page})=>{
        console.log("This is Test 6")

    })
})