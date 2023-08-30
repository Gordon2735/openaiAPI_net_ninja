'use strict';

import express from 'express';
import indexRouteHandler, {
    indexRoutePostHandler,
    openaiMetaPostHandler,
    openaiImagePostHandler
} from './routeHandlers.js';

let router = express.Router();

const indexRoute = router
    .get('/', indexRouteHandler)
    .post('/', indexRoutePostHandler);

const openaiMetaRoute = router.post('/openai/meta', openaiMetaPostHandler);
const openaiImageRoute = router.post('/openai/image', openaiImagePostHandler);

const routing = [indexRoute, openaiMetaRoute, openaiImageRoute];
const openaiRoutes = router;

for (const routes of routing) {
    openaiRoutes.use('/', routes);
}

export default router;
