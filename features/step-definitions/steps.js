
const { Given, When, Then } = require('@wdio/cucumber-framework');
const expect = require('chai').expect;
const BasePage = require('../pages/base.page');
const HomePage = require('../pages/home.page');
const SecurePage = require('../pages/secure.page');

When('I choose to launch {string}', function (url) {

    HomePage.open(url);
    


});


