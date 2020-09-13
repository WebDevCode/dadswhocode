import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

//getthe posts directory where all .md files are located.
const postsDirectory = join(process.cwd(), "_posts");

//function to get all the posts slugs using the fs.readdirsync method. returns an array of strings
export const getPostSlugs = () => fs.readdirSync(postsDirectory);

//function to get a post by the slug.
export const getPostBySlug = (slug, fields = []) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    console.log(data, content);

    const items = {};

    //Ensure minimal data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
};

//function to return all posts
export const getAllPosts = (fields = []) => {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
    return posts;
};
