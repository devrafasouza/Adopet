const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('New Post Page Form', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it("deve renderizar o formulario de nova postagem com todos os elementos", async () => {
    await driver.get('http://localhost:3000/new-post');

    const titleInput = await driver.findElement(By.css('input[name="title"]'));
    const descriptionInput = await driver.findElement(By.css('input[name="description"]'));
    const phoneNumberInput = await driver.findElement(By.css('input[name="phone_number"]'));
    const cepInput = await driver.findElement(By.css('input[name="cep"]'));
    const cityInput = await driver.findElement(By.css('input[name="city"]'));
    const districtInput = await driver.findElement(By.css('input[name="district"]'));
    const streetInput = await driver.findElement(By.css('input[name="street"]'));
    const houseNumberInput = await driver.findElement(By.css('input[name="house_number"]'));
    const categoryInput = await driver.findElement(By.css('input[name="category_name"]'));
    const categoriesSelect = await driver.findElement(By.css('#categories'));
    const submitButton = await driver.findElement(By.css('button[type="submit"]'));

    assert.strictEqual(titleInput.isDisplayed(), true);
    assert.strictEqual(descriptionInput.isDisplayed(), true);
    assert.strictEqual(phoneNumberInput.isDisplayed(), true);
    assert.strictEqual(cepInput.isDisplayed(), true);
    assert.strictEqual(cityInput.isDisplayed(), true);
    assert.strictEqual(districtInput.isDisplayed(), true);
    assert.strictEqual(streetInput.isDisplayed(), true);
    assert.strictEqual(houseNumberInput.isDisplayed(), true);
    assert.strictEqual(categoryInput.isDisplayed(), true);
    assert.strictEqual(categoriesSelect.isDisplayed(), true);
    assert.strictEqual(submitButton.isDisplayed(), true);

    await titleInput.sendKeys('Test Title');
    await descriptionInput.sendKeys('Test description');
    await phoneNumberInput.sendKeys('1234567890');
    await cepInput.sendKeys('12345678');
    await cityInput.sendKeys('Test City');
    await districtInput.sendKeys('Test District');
    await streetInput.sendKeys('Test Street');
    await categoriesSelect.click();
    const categoryOption = await driver.findElement(By.xpath('//option[text()="Categoria teste"]'));
    await categoryOption.click();

    await submitButton.click();

    await driver.wait(until.urlContains('/post-images'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl.includes('/post-images'), true);
  });
});
