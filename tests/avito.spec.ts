import {test, expect} from '@playwright/test';
import {AvitoCareEcoImpactPage} from "./avito-care-impact-page";

function screenshotPath(name: string): ReadonlyArray<string> {
    return ['..', '..', 'output', name];
}

test('water counter has valid screenshot', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toBeVisible()
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('water_counter.png'), { timeout: 10000 });
});

test('CO2 counter has valid screenshot', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toBeVisible()
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('co2_counter.png'));
});


test('energy counter has valid screenshot', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toBeVisible()
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('energy_counter.png'));
});
