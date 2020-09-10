import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";

const PageLayout = ({ allPostData, siteTitle, isHome, children }) => {
    const image = "static/hero.jpg";
    return (
        <>
            <div className="container">
                <Header siteTitle={siteTitle} />
                {isHome ? <Hero imageSrc={image} /> : null}
                <main>{children}</main>
                <Footer siteTitle={siteTitle} />
            </div>
            <style jsx>{``}</style>
        </>
    );
};

export default PageLayout;
