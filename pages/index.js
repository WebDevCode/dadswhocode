import Layout from "../components/layout";
import Hero from "../components/hero";
import { AUTHOR_BIO } from "../lib/constants";
import Head from "next/head";
import MoreStories from "../components/moreStories";
import AuthorBio from "../components/authorBio";
import { getAllPosts } from "../lib/api";
import { SITE_TITLE, SITE_DESC } from "../lib/constants";

const Home = ({ allPosts }) => {
    const image = "static/hero.jpg";
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESC} />
            </Head>
            <Layout>
                <Hero imageSrc={image} isHome={true} />
                <MoreStories posts={allPosts} title="All Posts" />
                <AuthorBio bio={AUTHOR_BIO} isHome={true} />
            </Layout>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
    ]);

    return {
        props: { allPosts },
    };
}
