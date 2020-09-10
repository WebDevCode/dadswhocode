import Container from "./container";
const Hero = ({ imageSrc }) => {
    return (
        <>
            <section className="hero">
                <Container>
                    <img
                        className="hero-img"
                        src={imageSrc}
                        alt="manila city lights at night"
                    />
                </Container>
            </section>

            <style jsx>
                {`
                    .hero {
                        display: flex;
                        height: 430px;
                        width: 100%;
                        background: black;
                    }
                    .hero-img {
                        width: 100%;
                        object-fit: cover;
                    }
                    @media all and (max-width: 768px) {
                        .hero {
                            height: 250px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Hero;
