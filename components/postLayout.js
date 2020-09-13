import Head from "next/head";
import Header from "../components/header";
import BlogTitle from "../components/blogTitle";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { SITE_TITLE, AUTHOR_BIO } from "../lib/constants";

import AuthorBio from "../components/authorBio";

const PostLayout = ({ children, blogTitle, author, coverImage, readTime }) => {
    return (
        <>
            <Header />
            <BlogTitle
                title={blogTitle}
                readTime={readTime}
                author={author.name}
            ></BlogTitle>

            <Hero imageSrc={coverImage} isHome={false} />

            <main>{children}</main>
            <AuthorBio bio={AUTHOR_BIO} isHome={false} />
            <Footer siteTitle={SITE_TITLE} />

            <style jsx>{``}</style>
        </>
    );
};

export default PostLayout;
