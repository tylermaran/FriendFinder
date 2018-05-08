// friends is just an array of people in a json format
var food = require("../data/food");
var questions = require("../data/questions");

module.exports = function (app) {

    // Routes returns all items in friends array as json
    app.get("/api/food", function (req, res) {
        // update to pull from MongoDB
        res.json(food);
    });

    // Routes returns all items in friends array as json
    app.get("/api/questions", function (req, res) {
        // update to pull from MongoDB
        res.json(questions);
    });

    app.post("/api/food", function (req, res) {

        var bestMatch = {
            food: "",
            photo: "",
        };

        var userData = req.body;
        console.log(userData);
        console.log(food);

        // UserScores is an array of question answers (Agree = 1; Meh = 2)
        var userAnswers = userData['questions[]'];
        console.log(userAnswers);
        var score = 0;
        var topScore = [];
        for (let i = 0; i < food.length; i++) {
            for (let j = 0; j < food[i].scores.length; j++) {
                for (let k = 0; k < userAnswers.length; k++) {
                    if (userAnswers[k] === food[i].scores[k]) {
                        score++;
                    }
                }
            }
        topScore.push(score);
        score = 0;   
        }
        console.log(topScore);
        console.log(Math.max.apply(null, topScore));
        for (let i = 0; i < topScore.length; i++) {
            
            if (Math.max.apply(null, topScore)=== topScore[i]) {
                console.log("Matches " + i + " position");
                bestMatch.food = food[i].name;
                bestMatch.photo = food[i].photo;
                console.log(bestMatch);
                return res.json(bestMatch);
            }
            
        }
       
        // // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // // the database will always return that the user is the user's best friend).
        // food.push(userData);

        // // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        
    });
};