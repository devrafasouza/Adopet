const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('SignUp Page', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Deve mostrar o toast de sucesso apos realizar o cadastro', async function () {
    await driver.get('http://localhost:3000/signup');

    const nameField = await driver.findElement(By.name('name'));
    await nameField.sendKeys('Teste User');

    const emailField = await driver.findElement(By.name('email'));
    await emailField.sendKeys('testeuser@example.com');

    const passwordField = await driver.findElement(By.name('password'));
    await passwordField.sendKeys('password');

    await passwordField.sendKeys(Key.ENTER);

    const toast = await driver.wait(
      until.elementLocated(By.css('.toast.success')),
      5000
    );

    const message = await toast.getText();
    assert.strictEqual(message, 'Cadastro realizado Você já pode fazer seu logon no AdopetCP');
  });

  it('deve mostrar o toast de erro apos realizar o cadastro com dados incorretos', async function () {
    await driver.get('http://localhost:3000/signup');

    const nameField = await driver.findElement(By.name('name'));
    await nameField.sendKeys('');

    const emailField = await driver.findElement(By.name('email'));
    await emailField.sendKeys('email123');

    const passwordField = await driver.findElement(By.name('password'));
    await passwordField.sendKeys('123');

    await passwordField.sendKeys(Key.ENTER);

    const toast = await driver.wait(
      until.elementLocated(By.css('.toast.error')),
      5000
    );

    const message = await toast.getText();
    assert.strictEqual(
      message,
      'Erro no cadastro Ocorreu um erro ao se cadastrar, tente novamente'
    );
  });
});
