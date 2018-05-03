// Path routing to HTML file
var path = require("path");

module.exports = function (app) {

    // Get survey will route the user to the survey.html page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // * will direct user to / if there is no result
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

};