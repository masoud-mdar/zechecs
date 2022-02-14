const ObjectId = require("mongodb").ObjectId;

module.exports = function(app, myDataBase) {

    app.route("api/results")
        .get((req, res) => {
            res.send("Results table");
        })

    app.route("api/results/:player")
        .get((req, res) => {
            const user = req.params.player;

            if (player) {
                res.send("search in data base for a player's results")
            }
        })

}