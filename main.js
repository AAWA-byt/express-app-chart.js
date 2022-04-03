const express = require("express");
const app = express();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

// start express applicaiton
app.listen(config.port, () => {
    console.log("Application startet!")
    console.log("------------------------------------------------------------------------")
    console.log("Port" + config.port)
    console.log("Date: " + new Date())

});

app.use(express.static(__dirname));

// rendering the index.html file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});