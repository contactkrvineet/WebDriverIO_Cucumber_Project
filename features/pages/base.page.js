module.exports = class BasePage {

    open(path) {

        browser.url(path);
        browser.maximizeWindow();
        browser.pause(50000);
        


    }



}