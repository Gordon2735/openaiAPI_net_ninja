'use strict';

import * as readline from 'node:readline/promises';
import openai from "./config/openaiConfig.js";


const chatInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chatQuestion = await chatInterface.question('YouTube Video Title: \n', (title) => {
    console.log(`Video Title: ${title}`);
    chatInterface.close();
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo-0613",
});

