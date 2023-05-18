const {Builder, By} = require('selenium-webdriver');

async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // 打开登录页面
        await driver.get('http://localhost:3000/auth');
    } finally {

        await driver.quit();
    }
}

loginTest();
