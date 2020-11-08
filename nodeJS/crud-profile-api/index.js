
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const profileFile = __dirname + "\\" + "models\\profiles.json";
const profiles = getProfiles(profileFile);
const rootUrl = "/api/profiles";

const port = 5000;

function getProfiles() {
    try {
        return JSON.parse(fs.readFileSync(profileFile, 'utf8'));
    }
    catch (e) {
        console.log(e);
    }
    return;
}

//Middleware processing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

//GET /
app.get('/', function (_, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(path.join(__dirname, "index.htm"));
});

// //GET /api/profiles
// app.get(rootUrl, (req, res) => {
// });

// //GET /api/profiles/:id
// app.get(`${rootUrl}/:id`, (req, res) => {
// });

// //POST /api/profiles
// app.post(rootUrl, (req, res) => {
// });

// //PUT /api/profiles
// app.put(`${rootUrl}/:id`, (req, res) => {
// });

// //PATCH /api/profiles
// app.patch(`${rootUrl}/:id`, (req, res) => {
// });

// //DELETE /api/profiles/:id
// app.delete(`${rootUrl}/:id`, (req, res) => {
// });

app.listen(port, function () {
    console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;