import fs from 'node:fs/promises';
import matter from 'gray-matter';

const articles = await fs.readdir('./docs/blog/');

const data = await Promise.all(
    articles.filter(x =>  x != "index.md" && x.endsWith('.md')).map(async (article) => {
        const file = matter.read(`./docs/blog/${article}`, {
            excerpt: true,
            excerpt_separator: '',
        });
        
        const { data, path } = file;
        return {
            ...data,
            image : data.image,
            path: path.replace('./docs', '').replace(/\.md$/, '.html'),
        };
    })
);

await fs.writeFile('./docs/blog/data.json', JSON.stringify(data), 'utf-8');