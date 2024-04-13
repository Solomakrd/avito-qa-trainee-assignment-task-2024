import { expect, type Locator, type Page } from '@playwright/test';

export class AvitoCareEcoImpactPage {
    readonly page: Page;
    readonly waterCounter: Locator;
    readonly co2Counter: Locator;
    readonly energyCounter: Locator;

    constructor(page: Page) {
        this.page = page;
        this.waterCounter = page.locator("html > body > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div:nth-of-type(4)")
        this.co2Counter = page.locator("html > body > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div:nth-of-type(2)")
        this.energyCounter = page.locator("html > body > div:nth-of-type(1) > div > div:nth-of-type(3) > div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div:nth-of-type(6)")
    }

    async goto() {
        await this.page.goto('https://www.avito.ru/avito-care/eco-impact');
    }
}

