import Container from "./container";

const BlogData = () => {
    return (
        <>
            <Container>
                <div className="entry-content">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt est libero sit omnis vero at. Neque sunt
                        repellat eius repudiandae sapiente nam tempore magnam,
                        dolore minus! Pariatur debitis alias ea.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt est libero sit omnis vero at. Neque sunt
                        repellat eius repudiandae sapiente nam tempore magnam,
                        dolore minus! Pariatur debitis alias ea. Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Provident
                        ea, facere ab deserunt, velit eius fugiat necessitatibus
                        itaque maiores blanditiis tempora odio odit perferendis
                        recusandae laborum assumenda, at hic sunt. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Aperiam
                        deserunt illo dolorum voluptatibus. Consectetur vel,
                        omnis doloribus aliquid quas obcaecati, sequi veniam
                        laudantium repellendus, quisquam voluptatum odio
                        cupiditate nihil a.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt est libero sit omnis vero at. Neque sunt
                        repellat eius repudiandae sapiente nam tempore magnam,
                        dolore minus! Pariatur debitis alias ea.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt est libero sit omnis vero at. Neque sunt
                        repellat eius repudiandae sapiente nam tempore magnam,
                        dolore minus! Pariatur debitis alias ea.
                    </p>
                </div>
            </Container>
            <style jsx>
                {`
                    .entry-content {
                        background: #ffff;
                        margin: 40px 0 20px;
                        padding: 20px;
                        color: #23446b;
                        line-height: 1.5;
                        font-size: 20px;
                        font-size: 1.25rem;
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
