'use strict';
module.exports = function (app) {
    var controller = require('./controller');


    app.route('/deleteall')
        .get(controller.deleteAll)


};
