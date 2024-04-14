import {test, expect} from '@playwright/test';
import {AvitoCareEcoImpactPage} from "./avito-care-impact-page";

function screenshotPath(name: string): ReadonlyArray<string> {
    return ['..', '..', 'output', name];
}

function initResponseJSON(co2: any, water: any, energy: any) {
    return {
        result: {
            blocks: {
                personalImpact: {
                    data: {
                        co2: co2,
                        energy: energy,
                        materials: 0,
                        pineYears: 0,
                        water: water
                    }
                }
            }, isAuthorized: true
        }, status: "ok"
    };
}

test('Test 1. Проверка отображения счётчика СО2 на странице неавторизованного пользователя.', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 1.png'));
});

test('Test 2. Проверка отображения счётчика воды на странице неавторизованного пользователя.', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 2.png'));
});

test('Test 3. Проверка отображения счётчика энергии на странице неавторизованного пользователя.', async ({page}) => {
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 3.png'));
});

test('Test 4. Проверка отображения счётчика СО2 при значении "999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(999, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 4.png'));
});

test('Test 5. Проверка отображения счётчика воды при значении "999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 999, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 5.png'));
});

test('Test 6. Проверка отображения счётчика энергии при значении "999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 999)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 6.png'));
});

test('Test 7. Проверка отображения счётчика СО2 при значении "1000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 7.png'));
});

test('Test 8. Проверка отображения счётчика воды при значении "1000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 8.png'));
});

test('Test 9. Проверка отображения счётчика энергии при значении "1000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 9.png'));
});

test('Test 10. Проверка отображения счётчика СО2 при значении "1001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1001, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 10.png'));
});

test('Test 11. Проверка отображения счётчика воды при значении "1001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1001, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 11.png'));
});

test('Test 12. Проверка отображения счётчика энергии при значении "1001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1001)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 12.png'));
});

test('Test 13. Проверка отображения счётчика СО2 при значении "999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(999999, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 13.png'));
});

test('Test 14. Проверка отображения счётчика воды при значении "999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 999999, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 14.png'));
});

test('Test 15. Проверка отображения счётчика энергии при значении "999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 999999)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 15.png'));
});

test('Test 16. Проверка отображения счётчика СО2 при значении "1000000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 16.png'));
});

test('Test 17. Проверка отображения счётчика воды при значении "1000000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 17.png'));
});

test('Test 18. Проверка отображения счётчика энергии при значении "1000000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 18.png'));
});

test('Test 19. Проверка отображения счётчика СО2 при значении "1000001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000001, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 19.png'));
});

test('Test 20. Проверка отображения счётчика воды при значении "1000001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000001, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 20.png'));
});

test('Test 21. Проверка отображения счётчика энергии при значении "1000001" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000001)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 21.png'));
});

test('Test 22. Проверка отображения счётчика СО2 при значении "999999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(999999999, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 22.png'));
});

test('Test 23. Проверка отображения счётчика воды при значении "999999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 999999999, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 23.png'));
});

test('Test 24. Проверка отображения счётчика энергии при значении "999999999" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 999999999)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 24.png'));
});

test('Test 25. Проверка отображения счётчика СО2 при значении "1000000000" на странице авторизованного пользователя.', async ({page}) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000000, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 25.png'));
});

test('Test 26. Проверка отображения счётчика воды при значении "1000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000000, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 26.png'));
});

test('Test 27. Проверка отображения счётчика энергии при значении "1000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000000)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 27.png'));
});

test('Test 28. Проверка отображения счётчика СО2 при значении "1000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000001, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 28.png'));
});

test('Test 29. Проверка отображения счётчика воды при значении "1000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000001, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 29.png'));
});

test('Test 30. Проверка отображения счётчика энергии при значении "1000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000001)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 30.png'));
});

test('Test 31. Проверка отображения счётчика СО2 при значении "999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(999999999999, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 31.png'));
});

test('Test 32. Проверка отображения счётчика воды при значении "999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 999999999999, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 32.png'));
});

test('Test 33. Проверка отображения счётчика энергии при значении "999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 999999999999)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 33.png'));
});

test('Test 34. Проверка отображения счётчика СО2 при значении "1000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000000000, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 34.png'));
});

test('Test 35. Проверка отображения счётчика воды при значении "1000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000000000, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 35.png'));
});

test('Test 36. Проверка отображения счётчика энергии при значении "1000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000000000)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 36.png'));
});

test('Test 37. Проверка отображения счётчика СО2 при значении "1000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000000001, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 37.png'));
});

test('Test 38. Проверка отображения счётчика воды при значении "1000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000000001, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 38.png'));
});

test('Test 39. Проверка отображения счётчика энергии при значении "1000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000000001)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 39.png'));
});

test('Test 40. Проверка отображения счётчика СО2 при значении "999999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(999999999999999, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 40.png'));
});

test('Test 41. Проверка отображения счётчика воды при значении "999999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 999999999999999, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 41.png'));
});

test('Test 42. Проверка отображения счётчика энергии при значении "999999999999999" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 999999999999999)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 42.png'));
});

test('Test 43. Проверка отображения счётчика СО2 при значении "1000000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000000000000, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 43.png'));
});

test('Test 44. Проверка отображения счётчика воды при значении "1000000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000000000000, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 44.png'));
});

test('Test 45. Проверка отображения счётчика энергии при значении "1000000000000000" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000000000000)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 45.png'));
});

test('Test 46. Проверка отображения счётчика СО2 при значении "1000000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(1000000000000001, 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 46.png'));
});

test('Test 47. Проверка отображения счётчика воды при значении "1000000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 1000000000000001, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 47.png'));
});

test('Test 48. Проверка отображения счётчика энергии при значении "1000000000000001" на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 1000000000000001)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 48.png'));
});

test('Test 49. Проверка отображения счётчика СО2 при введении в поле значение буквы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON('Сто', 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 49.png'));
});

test('Test 50. Проверка отображения счётчика воды при введении в поле значение буквы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 'Сто', 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 50.png'));
});

test('Test 51. Проверка отображения счётчика энергии при введении в поле значение буквы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, 'Сто')});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 51.png'));
});

test('Test 52. Проверка отображения счётчика СО2 при введении в поле значение спец символы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON('!)', 0, 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.co2Counter).toHaveScreenshot(screenshotPath('Test 52.png'));
});

test('Test 53. Проверка отображения счётчика воды при введении в поле значение спец символы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, '!)', 0)});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.waterCounter).toHaveScreenshot(screenshotPath('Test 53.png'));
});

test('Test 54. Проверка отображения счётчика энергии при введении в поле значение спец символы на странице авторизованного пользователя.', async ({ page }) => {
    await page.route('*/**/web/1/charity/ecoImpact/init', async route => {
        await route.fulfill({json: initResponseJSON(0, 0, '!)')});
    });
    const ecoImpactPage = new AvitoCareEcoImpactPage(page);
    await ecoImpactPage.goto();
    await expect(ecoImpactPage.energyCounter).toHaveScreenshot(screenshotPath('Test 54.png'));
});
