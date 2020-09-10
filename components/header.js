import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { TWITTER_HANDLE, FB_HANDLE, GITHUB_HANDLE } from "../lib/constants";
import Link from "next/link";

const Header = ({ siteTitle }) => {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header-wrapper">
                        <div className="site-title">
                            <h1>{siteTitle}</h1>
                        </div>
                        <nav className="header-nav">
                            <Link href="/">
                                <a>Blog</a>
                            </Link>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </nav>
                        <div className="social-icons">
                            <Link href={TWITTER_HANDLE}>
                                <a className="icon twitter" target="_blank">
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="icon"
                                    />
                                </a>
                            </Link>
                            <Link href={FB_HANDLE}>
                                <a className="icon facebook" target="_blank">
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="icon"
                                    />
                                </a>
                            </Link>
                            <Link href={GITHUB_HANDLE}>
                                <a className="icon github" target="_blank">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="icon"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </header>
            <style jsx>{`
                .header {
                    background-color: #ffffff;
                    height: 60px;
                    display: flex;
                }
                .header-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                }
                .site-title {
                    background-color: #000000;
                    padding: 0 10px;
                    flex: 0 1 auto;
                }

                .site-title h1 {
                    margin: 0;
                    font-size: 48px;
                    font-size: 3rem;
                    color: #ffffff;
                }
                .header-nav {
                    display: flex;
                    flex-direction: row;
                    flex: 4 1 auto;
                    align-items: center;
                    justify-content: flex-end;
                    color: #000000;
                }
                .header-nav > a {
                    color: #3a0088;
                }
                .header-nav > a:hover {
                    color: #000000;
                }
                .social-icons {
                    display: flex;
                    align-self: center;
                    align-items: center;
                    justify-content: flex-end;
                    flex: 1 1 auto;
                }
                .header-nav > a,
                .icon {
                    padding: 0 10px;
                }

                .twitter,
                .facebook,
                .github {
                    color: #3a0088;
                }
                .twitter:hover {
                    color: #1da1f2;
                }
                .facebook:hover {
                    color: #3b5998;
                }
                .github:hover {
                    color: #000000;
                }
                @media all and (max-width: 768px) {
                    .header {
                        height: auto;
                        padding-bottom: 10px;
                    }
                    .header-wrapper {
                        flex-direction: column;
                        position: relative;
                    }
                    .site-title {
                        position: relative;
                    }
                    .site-title h1 {
                        font-size: 32px;
                        font-size: 2rem;
                    }
                    .header-nav {
                        justify-content: flex-start;
                        padding-top: 10px;
                    }
                    .social-icons {
                        position: absolute;
                        right: 0;
                        top: 10px;
                        justify-content: flex-start;
                    }
                    .twitter,
                    .facebook,
                    .github {
                        color: #ffffff;
                    }
                    .twitter:hover,
                    .facebook:hover,
                    .github:hover {
                        color: #f3f7f9;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
