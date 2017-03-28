const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render("index");
});

routes.get('/child', (req, res) => {
    res.render("child");
});

module.exports = routes;