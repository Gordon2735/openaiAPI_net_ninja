'use strict';
import express from 'express';
import router from './src/controllers/routes/router.js';
import open, { apps } from 'open';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const openApps = apps;
const loginDate = new Date().toLocaleDateString('default', {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    year: 'numeric'
});
const loginTime = new Date().toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(path.join(__dirname, '/views')));
app.use('/', router);

const PORT = process.env.PORT || 7080;
const HOST = process.env.HOST || '127.0.0.1';

// Initialize Server
initServer(PORT, HOST, loginDate, loginTime);

// Create Server and Open Browser Support
async function initServer(port, host, logDate, logTime) {
    try {
        app.listen(port, () => {
            console.info(
                chalk.yellowBright(
                    `Server is listening on HOST: ${host}, PORT: ${port}`
                )
            );
            console.info(
                chalk.greenBright(
                    `Server Instance Login Date: ${logDate} || Time: ${logTime}`
                )
            );
            const openBrowser = async () => {
                await open(`${host}:${port}/`, {
                    app: { name: openApps.chrome }
                })
                    .then(() => {
                        console.info(
                            chalk.magentaBright(`Browser Opened Successfully`)
                        );
                    })
                    .catch((error) => {
                        console.log(
                            `The openBrowser Function had an ERROR: ${error}`
                        );
                    });
            };
            openBrowser();
        });
    } catch (error) {
        console.log(`The initServer Function had an ERROR: ${error}`);
    }
}
