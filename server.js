const express = require('express');
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.use("/js", express.static(path.resolve(__dirname, "js")));
app.use("/css", express.static(path.resolve(__dirname, "css")));
app.use("/assets", express.static(path.resolve(__dirname, "assets")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...")
})

app.get("/", (req, res) => {
    res.render("index.js")
})