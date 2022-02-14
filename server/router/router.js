const ObjectId = require("mongodb").ObjectId;

module.exports = function(app, myDataBase) {

    app.route("/api/results")
        .get((req, res) => {
            res.send("Results table");
        })

    app.route("/api/results/:player")
        .get((req, res) => {
            const player = req.params.player;
            console.log(player)

            if (!player) {
                throw new Error("Player not found");
            }

            res.send("search in data base for a player's results")

        })

}