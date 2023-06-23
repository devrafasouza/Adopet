const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Edit Post Page', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('Deve editar o post', async () => {
    await driver.get('http://localhost:3000/edit-post/1');

    await driver.findElement(By.name('title')).sendKeys('Titulo teste');
    await driver.findElement(By.name('description')).sendKeys('Descricao test');
    await driver.findElement(By.name('phone_number')).sendKeys('16981400395');
    await driver.findElement(By.name('cep')).sendKeys('15910000');
    await driver.findElement(By.name('city')).sendKeys('Cidade test');
    await driver.findElement(By.name('district')).sendKeys('teste');
    await driver.findElement(By.name('street')).sendKeys('Rua teste');
    await driver.findElement(By.name('house_number')).sendKeys('123');
    await driver.findElement(By.id('categories')).sendKeys('Categoria 1');
    await driver.findElement(By.id('categories')).sendKeys(Key.RETURN);
    await driver.findElement(By.tagName('form')).submit();

    await driver.wait(until.urlContains('/edit-post-images'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl.includes('/edit-post-images'), true);
  });
});
