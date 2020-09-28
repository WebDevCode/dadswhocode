import Container from "./container";
const Hero = ({ imageSrc, isHome, isAmp }) => {
    return (
        <>
            <section className="hero">
                <Container>
                    {!isAmp ? (
                        <img
                            className="hero-img"
                            src={imageSrc}
                            alt="manila city lights at night"
                        />
                    ) : (
                        <div className="outer">
                            <amp-img
                                alt="A view of the sea"
                                src={imageSrc}
                                width="1920"
                                height="720"
                                layout="responsive"
                            ></amp-img>
                        </div>
                    )}
                </Container>
            </section>

            <style jsx>
                {`
                    .hero {
                        display: flex;
                        height: auto;
                        width: 100%;
                        background: ${isHome ? "black" : "none"};
                        margin-top: ${isHome ? 0 : "10px"};
                    }
                    .hero-img {
                        width: 100%;
                        object-fit: cover;
                    }
                    .outer {
                        position: relative;
                        max-width: 1200px;
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </>
    );
};

export default Hero;
