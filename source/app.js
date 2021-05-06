const express = require('express');
const path = require('path');
const app = express();
var hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


app.get("/", (req, res) => {
    res.render('index');
})

app.get("/About", (req, res) => {
    res.render('about');
})

app.get("/Weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render('error', {
        errorMsg: 'Opps! Page not found'
    })
})

app.listen(port, () => {
    console.log(`listening ${port}`);
})