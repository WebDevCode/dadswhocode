import Container from "./container";
const MoreStories = ({ posts, title }) => {
    return (
        <Container>
            <section>
                <h2>{title}</h2>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </section>
        </Container>
    );
};

export default MoreStories;
