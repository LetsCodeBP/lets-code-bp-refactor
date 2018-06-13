'use strict'

const {Builder, By, Key, until} = require('selenium-webdriver')
require('chromedriver')

const clickOnDoubling = async ({server, SITE_URL}) => {
  const driver = await new Builder().forBrowser('chrome').build()
  let text = ''
  try {
    await driver.get(SITE_URL)
    await driver.findElement(By.id('doubling')).click()
    text = await driver.findElement(By.id('doubling_response')).getText()
  } finally {
    await driver.quit()
    server.close()
  }
  return text
}

module.exports = clickOnDoubling
