const apiService = require('../services/apiService');

module.exports = {

    home: function (req, res, next) {
        apiService.home().then((data) => {
            res.json(data);
        });
    },
    save: function (req, res, next) {
        apiService.save(req.body);
        res.send("ok");
    }

}