'use strict';

console.info(
    '%cTeam Webelistics®️',
    `color: gold;font-family: Chango; font-weight: bold;
        background-color: black; font-size: 1.3rem; padding: 1rem 8rem 1rem 8rem; letter-spacing: 3px;`
);

// forms
const metaForm = document.querySelector('.meta-form');
const imageForm = document.querySelector('.image-form');

// output elements
const description = document.querySelector('.description p');
const tags = document.querySelector('.tags p');
const thumbnail = document.querySelector('.thumbnail img');

// description and tags
metaForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/meta', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: metaForm.title.value }),
        method: 'POST'
    });
    const data = await res.json();

    console.log(data);

    description.textContent = data.description.content;
    tags.textContent = data.tags.content;
});

// image/thumbnail
imageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/openai/image', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imageForm.prompt.value }),
        method: 'POST'
    });
    const data = await res.json();

    thumbnail.setAttribute('src', data.url);
});
