const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('ResetPassword Page', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('deve mostrar toast de sucesso apos realizar o reset de senha com dados corretos', async function () {
    await driver.get('http://localhost:3000/reset-password?token=test-token');

    const passwordField = await driver.findElement(By.name('password'));
    await passwordField.sendKeys('novasenha123');

    const passwordConfirmField = await driver.findElement(By.name('passwordConfirmation'));
    await passwordConfirmField.sendKeys('novasenha123');

    await passwordConfirmField.sendKeys(Key.ENTER);

    const toast = await driver.wait(
      until.elementLocated(By.css('.toast.success')),
      5000
    );

    const message = await toast.getText();
    assert.strictEqual(message, 'Senha alterada Sua senha foi alterada com sucesso');

    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/');
  });

  it('deve mostrar o toast de erro apos realizar o reset de senha com dados incorretos', async function () {
    await driver.get('http://localhost:3000/reset-password?token=test-token');

    const passwordField = await driver.findElement(By.name('password'));
    await passwordField.sendKeys('novasenha123');

    const passwordConfirmField = await driver.findElement(By.name('passwordConfirmation'));
    await passwordConfirmField.sendKeys('senhanova321');

    await passwordConfirmField.sendKeys(Key.ENTER);

    const toast = await driver.wait(
      until.elementLocated(By.css('.toast.error')),
      5000
    );

    const message = await toast.getText();
    assert.strictEqual(
      message,
      'Erro ao alterar a senha Ocorreu um erro ao tentar realizar a alteração de senha, tente novamente.'
    );
  });
});
