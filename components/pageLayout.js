import Head from "next/head";
import Header from "../components/header";
import BlogTitle from "../components/blogTitle";
import Hero from "../components/hero";
import Footer from "../components/footer";

const PageLayout = ({
    allPostData,
    siteTitle,
    isHome,
    children,
    blogTitle,
}) => {
    const image = "static/hero.jpg";
    return (
        <>
            <div className="container">
                <Header />
                {isHome ? (
                    <Hero imageSrc={image} isHome={isHome} />
                ) : (
                    <>
                        <BlogTitle
                            title={isHome || blogTitle}
                            readTime="10 mins"
                            author="Tinu George"
                        >
                            <Hero imageSrc={image} isHome={isHome} />
                        </BlogTitle>
                    </>
                )}
                <main>{children}</main>
                <Footer siteTitle={siteTitle} />
            </div>
            <style jsx>{``}</style>
        </>
    );
};

export default PageLayout;
