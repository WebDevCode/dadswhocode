import Link from "next/link";

import Container from "./container";
import { dateFormatter } from "../lib/utils";

const MoreStories = ({ posts, title }) => {
    return (
        <Container>
            <section className="more-posts">
                <h2>{title}</h2>
                <div className="posts">
                    {posts.map((post, index) => (
                        <Link key={index} href={post.slug}>
                            <a className="post-card">
                                <div>
                                    <div className="post-card-image">
                                        <img src={post.coverImage} />
                                    </div>
                                    <p className="post-title">{post.title}</p>
                                    <div className="post-meta">
                                        <span>{dateFormatter(post.date)}</span>
                                        <span>{post.author.name}</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
            <style jsx>
                {`
                    .more-posts {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        background-color: #ffffff;
                        margin-bottom: 40px;
                        padding: 40px 20px;
                    }
                    .posts {
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-between;
                    }
                    .post-card {
                        height: 320px;
                        flex-basis: 100%;
                        position: relative;
                        width: 300px;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 20px;
                    }

                    .post-card-image {
                        height: 200px;
                        width: 100%;
                        border-radius: 4px;
                        border: 0 solid #ffffff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }

                    .post-card img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 4px;
                    }

                    .post-title {
                        padding: 0 5px;
                        font-weight: 400;
                        font-size: 24px;
                        font-size: 1.5rem;
                        margin: 5px 0;
                        color: #3a0088;
                    }

                    .post-meta {
                        padding: 0 5px;
                        font-size: 18px;
                        font-size: 1.125rem;
                        color: #23446b;
                        font-weight: 300;
                        display: flex;
                        align-content: center;
                        justify-content: space-between;
                        flex-direction: row;
                    }

                    @media all and (min-width: 768px) {
                        .post-card {
                            flex-basis: 49%;
                        }
                    }

                    @media all and (min-width: 1100px) {
                        .post-card {
                            flex-basis: 32%;
                        }
                    }
                `}
            </style>
        </Container>
    );
};

export default MoreStories;
