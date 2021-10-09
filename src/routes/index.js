const newsRouter = require('./news');
const staticPagesRouter = require('./staticPages');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', staticPagesRouter);
}

module.exports = route;