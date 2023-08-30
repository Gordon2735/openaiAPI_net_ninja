'use strict';

import readline from 'readline';
import {
    generateMeta,
    generateImage
} from './src/controllers/openaiController.js';
import chalk from 'chalk';

const chatInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

chatInterface.question(chalk.red('YouTube Video Title: '), generateMeta);
chatInterface.question(
    chalk.red(`Scary, gross, and dark image:  `),
    generateImage
);
