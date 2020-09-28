import { useRouter } from "next/router";
import { useAmp } from "next/amp";
import Head from "next/head";
import Layout from "../components/layout";
import BlogTitle from "../components/blogTitle";
import Hero from "../components/hero";
import BlogData from "../components/blogData";
import AuthorBio from "../components/authorBio";
import { AUTHOR_BIO, SITE_TITLE } from "../lib/constants";
import { getAllPosts, getPostBySlug } from "../lib/api";

export const config = { amp: "hybrid" };

const Post = (props) => {
    const isAmp = useAmp();
    const {
        title,
        author,
        excerpt,
        content,
        coverImage,
        readTime,
    } = props.post;
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{`${title} - ${SITE_TITLE}`}</title>
                <meta name="description" content={excerpt} />
            </Head>
            <Layout>
                <BlogTitle
                    title={title}
                    readTime={readTime}
                    author={author.name}
                ></BlogTitle>
                <Hero imageSrc={coverImage} isAmp={isAmp} />
                <BlogData content={content} />
                <AuthorBio bio={AUTHOR_BIO} isHome={false} isAmp={isAmp} />
                <style global jsx>
                    {`
                        body {
                            background-color: #f3f7f9;
                        }
                    `}
                </style>
            </Layout>
        </>
    );
};

export default Post;

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "excerpt",
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
