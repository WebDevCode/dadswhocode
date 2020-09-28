import Link from "next/link";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
    TWITTER_HANDLE,
    FB_HANDLE,
    GITHUB_HANDLE,
    SITE_TITLE,
} from "../lib/constants";

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <div className="footer-wrapper">
                        <div className="footer-main">
                            <div className="footer-site">
                                <h1>{SITE_TITLE}</h1>
                                <div className="footer-social">
                                    <Link href={TWITTER_HANDLE}>
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                className="icon"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={FB_HANDLE}>
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                                className="icon"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={GITHUB_HANDLE}>
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className="icon"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-sub">
                            <p>
                                &copy; 2020 DadsWhoCode.io | Made with
                                <span className="hearts"> &#10084; </span>using
                                Markdown, NextJs &amp; Netlify.
                            </p>
                        </div>
                    </div>
                </Container>
            </footer>
            <style jsx>
                {`

                    footer{
                        /*background-color: #0c1e29;*/
                    }
                    .footer-wrapper {
                        background-color: #0c1e29;
                        color: #ffffff;
                        width: 100%;
                        padding: 30px 30px 10px;
                        display: flex;
                        flex-direction: column;
                    }
                    .footer-main {
                        width: 100%;
                        border-bottom: 1px solid #eaeaea;
                        flex: 1 1 auto;
                        display flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        padding-bottom: 30px;
                    }

                    .footer-site {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;  
                                             
                    }
                    .footer-site h1{
                        margin: 10px 0 2px;
                    }

                    .footer-social {
                        padding-bottom: 10px;
                        color:#9DDBFF;
                        color: hsla(202, 100%, 81%, 1);
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align: items: center;
                    } 
                    .footer-social a {
                        display: inline-block;
                        margin: 0 10px;
                    }
                    .footer-social a:first-of-type{
                        margin-left: 2px;
                    }

                    .footer-sub {
                        width: 100%;
                        flex: 1 1 auto;
                    }
                    .footer-sub {
                        font-size: 16px; 
                        font-size: 1rem;
                    }
                    .footer-sub p {
                        margin: 0;
                        padding-top: 5px;
                        color:#9DDBFF;
                        color: hsla(202, 100%, 81%, 1);
                    }
                    .hearts {
                        color: red;
                    }

                    @media all and (max-width: 568px) {
                        .footer-site h1 {
                            font-size: 28px;
                            font-size: 1.75rem;
                        }
                        .footer-sub p {
                            font-size: 14px;
                            font-size: 0.875rem;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Footer;
