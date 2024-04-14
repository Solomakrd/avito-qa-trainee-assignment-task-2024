import {type Locator, type Page} from '@playwright/test';

export class AvitoCareEcoImpactPage {
    readonly page: Page;
    readonly waterCounter: Locator;
    readonly co2Counter: Locator;
    readonly energyCounter: Locator;

    constructor(page: Page) {
        this.page = page;
        this.co2Counter = page.locator('.desktop-impact-item-eeQO3', {hasText: 'не попало в атмосферу'})
        this.waterCounter = page.locator('.desktop-impact-item-eeQO3', {hasText: 'было сохранено'})
        this.energyCounter = page.locator('.desktop-impact-item-eeQO3', {hasText: 'было сэкономлено'})
    }

    async goto() {
        await this.page.goto('https://www.avito.ru/avito-care/eco-impact');
    }
}
