const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Dashboard Page', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('deve renderizar a pagina de dashboard com as ultimas postagens', async () => {
    await driver.get('http://localhost:3000/dashboard');

    const header = await driver.findElement(By.css('header'));
    const content = await driver.findElement(By.css('main'));
    const footer = await driver.findElement(By.css('footer'));

    const headerText = await header.getText();
    assert.strictEqual(header.isDisplayed(), true);
    assert.strictEqual(headerText.includes('Dashboard'), true);

    const contentText = await content.getText();
    assert.strictEqual(content.isDisplayed(), true);
    assert.strictEqual(contentText.includes('Últimas postagens'), true);

    const footerText = await footer.getText();
    assert.strictEqual(footer.isDisplayed(), true);
    assert.strictEqual(footerText.includes('Copyright © 2021'), true);

    const lastPosts = await driver.findElement(By.css('.last-posts'));
    const postList = await lastPosts.findElements(By.css('.post'));
    const postTitles = await Promise.all(postList.map(post => post.getText()));
    assert.strictEqual(lastPosts.isDisplayed(), true);
    assert.strictEqual(postList.length > 0, true);
    assert.strictEqual(postTitles[0].includes('Title'), true);

  });
});
