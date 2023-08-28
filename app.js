'use strict';

import openai from "./config/openaiConfig.js";

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

console.log(`Hello, Ninja's!`);

console.log(process.env.OPENAI_API_KEY);
console.log(process.env.MSYSTEM_PREFIX);
