
const { Given, When, Then } = require('@cucumber/cucumber');
const BasePage = require('../pages/base.page');
const HomePage = require('../pages/home.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on home page', function () {
    HomePage.open();

    expect(browser).toHaveTitle('The Internet');
});

When('I choose to launch {string}', function (url) {
    browser.open(url);
});


