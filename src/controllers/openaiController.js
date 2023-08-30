'use strict';

import openai from '../../config/openaiConfig.js';
// import { chalkOpenAI as log } from '../formatters/openaiFormatter.js';

async function generateMeta(req, res) {
    const { title } = req.body;
    const description = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages: [
            {
                role: 'user',
                content: `Come up with a description for a YouTube Video 
                            called:  ${title}`
            }
        ],
        max_tokens: 100
    });

    const tags = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: `Come up with 10 keywords for a YouTube Video 
                            called:  ${title}`
            }
        ],
        max_tokens: 100
    });

    res.status(200).json({
        description: description.choices[0].message,
        tags: tags.choices[0].message
    });
}

async function generateImage(req, res) {
    const image = await openai.images.generate({
        prompt: req.body.prompt,
        n: 1,
        size: '512x512'
    });

    res.status(200).json({
        url: image.data[0].url
    });
}

export { generateMeta, generateImage };

// const image = await openai.images.createVariation({
