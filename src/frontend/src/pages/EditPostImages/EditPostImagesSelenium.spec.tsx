const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Edit Post Images Page', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it("deve fazer o upload de imagem, deletar uma imagem e pular uma imagem corretamente", async () => {
    await driver.get('http://localhost:3000/edit-post-images');

    const uploadImagesInput = await driver.findElement(By.css('#images'));

    await uploadImagesInput.sendKeys('<path_to_image>');

    await driver.wait(until.urlContains('/profile'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl.includes('/profile'), true);

    const deleteImageButton = await driver.findElement(By.css('#delete-image'));

    await deleteImageButton.click();

    const skipImagesButton = await driver.findElement(By.css('#finish-button'));

    await skipImagesButton.click();
    await driver.wait(until.urlContains('/dashboard'), 5000);
    const currentUrl2 = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl2.includes('/dashboard'), true);
  });
});
