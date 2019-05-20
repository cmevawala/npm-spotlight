const slug = require('slug');

const slugify = (words) => {
    return slug(words, {
        lower: true,
        replacement: ''
    });
}

console.log(slugify("Blog Post One"));