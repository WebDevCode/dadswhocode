import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faClock } from "@fortawesome/free-solid-svg-icons";

const BlogTitle = ({ title, readTime, author, children }) => {
    return (
        <>
            <div className="title-wrapper">
                <Container>
                    <div className="title-body">
                        <h1 className="blog-title">{title}</h1>
                        <div className="title-meta">
                            <p className="author">
                                <span>
                                    <FontAwesomeIcon icon={faAt} />
                                </span>
                                &nbsp;
                                {author}
                            </p>
                            <p className="read-time">
                                <span>
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                                &nbsp;
                                {readTime}
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>{children}</Container>
            <style jsx>{`
                .title-wrapper {
                    margin: 30px 0 10px;
                }
                .title-body {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 0 10px;
                }
                .blog-title {
                    margin: 0;
                    padding-bottom: 10px;
                    font-size: 64px;
                    font-size: 4rem;
                }
                .title-meta {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                .title-meta p {
                    padding: 0 10px;
                    font-style: italic;
                    color: #0b1d2899;
                    color: hsla(203, 55%, 10%, 0.8);
                    font-weight: 300;
                    font-size: 16px;
                    font-size: 1rem;
                }
                @media all and (max-width: 849px) {
                    .blog-title {
                        font-size: 48px;
                        font-size: 3rem;
                    }
                }

                @media all and (max-width: 768px) {
                    .blog-title {
                        font-size: 32px;
                        font-size: 2rem;
                    }
                    .title-meta p {
                        font-size: 18px;
                        font-size: 1.125rem;
                    }
                }
            `}</style>
        </>
    );
};

export default BlogTitle;
