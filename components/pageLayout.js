import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";

const PageLayout = ({ allPostData, siteTitle, isHome, children }) => {
    return (
        <div className="container">
            <Header siteTitle={siteTitle} />
            {isHome ? <Hero /> : null}
            <main>{children}</main>
            <Footer siteTitle={siteTitle} />
        </div>
    );
};

export default PageLayout;
