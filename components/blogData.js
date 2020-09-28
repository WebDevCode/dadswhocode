import Container from "./container";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeBlock";

const BlogData = ({ content }) => {
    return (
        <>
            <Container>
                <div className="entry-content">
                    <ReactMarkdown
                        source={content}
                        renderers={{ code: CodeBlock }}
                    />
                </div>
            </Container>
            <style jsx>
                {`
                    .entry-content {
                        background: #ffff;
                        margin: 10px 0 20px;
                        padding: 20px;
                        color: #23446b;
                        line-height: 1.5;
                        font-size: 20px;
                        font-size: 1.25rem;
                        min-width: 0;
                        font-family: Roboto, Arial, Helvetica, sans-serif;
                    }
                    .entry-content p {
                    }

                    @media all and (max-width: 768px) {
                        .entry-content {
                            font-size: 24px;
                            font-size: 1.5rem;
                        }
                    }
                `}
            </style>
        </>
    );
};
export default BlogData;
