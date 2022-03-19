
const { Given, When, Then } = require('@cucumber/cucumber');
const BasePage = require('../pages/base.page');
const HomePage = require('../pages/home.page');
const SecurePage = require('../pages/secure.page');

When('I choose to launch {string}', function (url) {

    HomePage.open(url);


});


