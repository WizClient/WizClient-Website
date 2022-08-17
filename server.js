const express = require('express');
const path = require('path');

const app = express();

app.use("/js", express.static(path.resolve(__dirname, "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
});

app.listen(process.env.PORT || 5500, () => {
    console.log("Server running...")
})



app.get("/", (req, res) => {
    res.render("index.js")
})