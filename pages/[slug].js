import { useRouter } from "next/router";

import PostLayout from "../components/postLayout";

import BlogData from "../components/blogData";
import { getAllPosts, getPostBySlug } from "../lib/api";

const Post = (props) => {
    const { title, author, content, coverImage, readTime } = props.post;
    const router = useRouter();
    console.log(props);
    return (
        <PostLayout
            blogTitle={title}
            author={author}
            coverImage={coverImage}
            readTime={readTime}
        >
            <BlogData content={content} />
        </PostLayout>
    );
};

export default Post;

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
        "readTime",
    ]);

    return {
        props: {
            post: {
                ...post,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}
