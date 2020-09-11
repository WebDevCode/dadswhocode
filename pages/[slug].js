import Head from "next/head";
import Link from "next/link";
import { SITE_TITLE, AUTHOR_BIO } from "../lib/constants";
import PageLayout from "../components/pageLayout";
import AuthorBio from "../components/authorBio";
import BlogData from "../components/blogData";
const Post = (props) => {
    return (
        <PageLayout isHome={false} siteTitle={SITE_TITLE} allPostData={{}}>
            <BlogData />
            <AuthorBio bio={AUTHOR_BIO} isHome={false} />
        </PageLayout>
    );
};

export default Post;

export async function getStaticProps({ params }) {
    return {
        props: {
            post: {},
        },
    };
}
