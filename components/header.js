import Container from "./container";
import TopBar from "./topbar";

const Header = ({ siteTitle }) => {
    return (
        <>
            <TopBar>
                <Container>
                    <div className="newsletter">fi</div>
                    <div className="social-icons">dd</div>
                </Container>
            </TopBar>
            <header>
                <Container>
                    <div className="site-title">{siteTitle}</div>
                </Container>
            </header>
            <style jsx>{`
                .newsletter {
                    display: flex;
                    align-self: flex-start;
                    flex: 4 1 auto;
                }
                .social-icons {
                    display: flex;
                    flex-direction: row-reverse;
                    align-self: flex-end;
                    flex: 1 1 auto;
                }
            `}</style>
        </>
    );
};

export default Header;
