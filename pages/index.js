import Head from "next/head";
import Link from "next/link";
import { SITE_TITLE } from "../lib/constants";
import PageLayout from "../components/pageLayout";
const Home = () => {
    return (
        <PageLayout isHome={true} siteTitle={SITE_TITLE} allPostData={{}}>
            <div>This is the homepage..</div>
        </PageLayout>
    );
};

export default Home;
