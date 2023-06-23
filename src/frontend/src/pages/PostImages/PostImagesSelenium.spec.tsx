const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('PostImages Page', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('deve fazer o upload de imagens e redirecionar para profile com sucesso', async () => {
    await driver.get('http://localhost:3000/post-images');

    const uploadInput = await driver.findElement(By.css('input[type=file]'));
    await uploadInput.sendKeys('/path/to/image1.jpg/path/to/image2.jpg/path/to/image3.jpg');
    await driver.findElement(By.css('button[type=submit]')).click();

    const toast = await driver.wait(until.elementLocated(By.css('.toast.success')), 5000);

    const message = await toast.getText();
    assert.strictEqual(
      message,
      'Postagem realizada com sucesso',
    );

    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/profile');
  });

  it('deve redirecionar para profile apos o click', async () => {
    await driver.get('http://localhost:3000/post-images');

    await driver.findElement(By.css('button[type=button]')).click();

    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/profile');
  });
});
