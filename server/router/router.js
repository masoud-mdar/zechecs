const ObjectId = require("mongodb").ObjectId;

module.exports = function(app, myDataBase) {

    app.route("/api/results")
        .get((req, res) => {
            res.send("Results table");
        })

    app.route("/api/results/:player")
        .get((req, res) => {
            const {player} = req.params;
            console.log(player)

            if (!player) {
                throw new Error("Player not found");
            }

            res.send("search in data base for a player's results")

        })

        // NOT WORKING FOR NOW
        // .post((req, res) => {
        //     const {player} = req.params;
        //     console.log(player)
        //     const {result} = req.params;
        //     console.log(result)
        //     if (!player) {
        //         throw new Error("Player not found");
        //     }

        //     if (!result) {
        //         throw new Error("No result sent");
        //     }

        //     res.send("Add new result for the player")

        // })
        

}