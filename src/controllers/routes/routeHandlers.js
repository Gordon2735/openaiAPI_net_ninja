'use strict';
import { generateMeta, generateImage } from '../openaiController.js';

async function indexRouteHandler(req, res) {
    try {
        res.set('Content-Type', 'text/html');
        res.set('target', '_blank');
        res.render('index', {
            title: 'OpenAI Playground',
            StyleSheet: ['/src/css/index.css'],
            script: ['/src/js/index.js']
        });
        return;
    } catch (error) {
        console.log(`The indexRouteHandler Function had an ERROR: ${error}`);

        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            error: error
        });
        return;
    }
}

async function indexRoutePostHandler(req, res) {
    try {
        return;
    } catch (error) {
        console.log(
            `The indexRoutePostHandler Function had an ERROR: ${error}`
        );

        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            error: error
        });
        return;
    }
}

async function openaiMetaPostHandler(req, res) {
    try {
        return generateMeta(req, res);
    } catch (error) {
        console.log(
            `The openaiMetaPostHandler Function had an ERROR: ${error}`
        );

        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            error: error
        });
        return;
    }
}

async function openaiImagePostHandler(req, res) {
    try {
        return generateImage(req, res);
    } catch (error) {
        console.log(
            `The openaiImagePostHandler Function had an ERROR: ${error}`
        );

        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            error: error
        });
        return;
    }
}

export {
    indexRouteHandler as default,
    indexRoutePostHandler,
    openaiMetaPostHandler,
    openaiImagePostHandler
};
