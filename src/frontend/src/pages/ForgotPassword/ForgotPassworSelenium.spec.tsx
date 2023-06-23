const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Forgot Password Page', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('deve conseguir resetar a senha', async () => {
    await driver.get('http://localhost:3000/forgot-password');

    await driver.findElement(By.name('email')).sendKeys('teste@email.com');
    await driver.findElement(By.tagName('form')).submit();

    await driver.wait(until.elementLocated(By.className('toast-success')), 5000);
    const toastMessage = await driver.findElement(By.className('toast-success')).getText();
    assert.strictEqual(toastMessage.includes('E-mail de recuperação enviado'), true);

    await driver.wait(until.urlContains('/dashboard'), 5000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl.includes('/dashboard'), true);
  });

  it('deve mostrar o toast de erro quando o email não está inserido', async () => {
    await driver.get('http://localhost:3000/forgot-password');

    await driver.findElement(By.tagName('form')).submit();

    await driver.wait(until.elementLocated(By.className('toast-error')), 5000);
    const toastMessage = await driver.findElement(By.className('toast-error')).getText();
    assert.strictEqual(toastMessage.includes('E-mail obrigatório'), true);
  });

  it('deve mostrar toast de erro quando o email é inválido', async () => {
    await driver.get('http://localhost:3000/forgot-password');

    await driver.findElement(By.name('email')).sendKeys('emailerrado');
    await driver.findElement(By.tagName('form')).submit();

    await driver.wait(until.elementLocated(By.className('toast-error')), 5000);
    const toastMessage = await driver.findElement(By.className('toast-error')).getText();
    assert.strictEqual(toastMessage.includes('Digite um e-mail válido'), true);
  });
});
