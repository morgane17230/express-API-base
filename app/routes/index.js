const { Router } = require('express');
const routes = Router();

routes.get('/', (_, res) => res.render('coucou'));

module.exports = routes;