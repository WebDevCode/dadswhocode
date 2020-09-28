import Meta from "./meta";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";

const Layout = ({ preview, children }) => {
    return (
        <>
            <Meta />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
