const BasePage = require('./base.page')

class HomePage extends BasePage {

    get userNameTextBox() { return $('#username') }



    open(url) {

        super.open(url)
        

    }

    

}

module.exports = new HomePage();


