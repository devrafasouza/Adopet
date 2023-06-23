const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('About Adopet page', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/about');
  });

  after(async function() {
    await driver.quit();
  });

  it('deve renderizar o header', async function() {
    const header = await driver.findElement(By.tagName('header'));
    const isDisplayed = await header.isDisplayed();
    assert.strictEqual(isDisplayed, true);
  });

  it('deve renderizar "Sobre Adopet" ', async function() {
    const heading = await driver.findElement(By.tagName('h1'));
    const text = await heading.getText();
    assert.strictEqual(text, 'Sobre o AdopetCP');
  });

  it('deve renderizar o texto do content', async function() {
    const content = await driver.findElement(By.className('Content'));
    const text = await content.getText();
    assert.strictEqual(text.includes('O AdopetCP é um projeto que apoia os animais necessitados'), true);
  });

  it('Deve renderizar o footer', async function() {
    const footer = await driver.findElement(By.tagName('footer'));
    const isDisplayed = await footer.isDisplayed();
    assert.strictEqual(isDisplayed, true);
  });
});
