import Head from "next/head";
import Link from "next/link";
import { SITE_TITLE, AUTHOR_BIO } from "../lib/constants";
import PageLayout from "../components/pageLayout";
import AuthorBio from "../components/authorBio";

const Home = () => {
    return (
        <PageLayout isHome={true} siteTitle={SITE_TITLE} allPostData={{}}>
            <AuthorBio bio={AUTHOR_BIO} isHome={true} />
        </PageLayout>
    );
};

export default Home;
