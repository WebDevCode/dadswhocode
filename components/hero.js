const Hero = ({ imageSrc }) => {
    return (
        <>
            <div className="hero">
                <img
                    className="hero-img"
                    src={imageSrc}
                    alt="manila city lights at night"
                />
            </div>
            <style jsx>
                {`
                    .hero {
                        display: flex;
                        height: 430px;
                        width: 100%;
                    }
                    .hero-img {
                        width: 100%;
                        object-fit: cover;
                        object-position: bottom;
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
