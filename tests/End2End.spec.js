import{test, expect} from '@playwright/test'
import { homepage} from '../Pages/homepage.spec'

test('Sanity', async ({page}) => {

    const hp= new homepage(page)
    await hp.homepage();
    await hp.destination();
    await hp.dateSelection('March 2026','20','21')

    await page.waitForTimeout(3000)

})