import Container from "./container";
const AuthorBio = ({ bio, isHome, isAmp }) => {
    return (
        <>
            <section className="featured-wrapper">
                <Container>
                    <div className="featured">
                        <div className="profile-pic">
                            {isAmp ? (
                                <amp-img
                                    src="static/profilepic.jpg"
                                    alt="profile pic"
                                    width="200"
                                    height="200"
                                ></amp-img>
                            ) : (
                                <img src="static/profilepic.jpg" alt="" />
                            )}
                        </div>
                        <div className="intro">
                            <h1>Hi There!!</h1>
                            <p>{bio}</p>
                            <span>#100DaysofCode</span>
                        </div>
                    </div>
                </Container>
            </section>
            <style jsx>
                {`
                    .featured-wrapper {
                        position: relative;
                        margin-bottom: ${isHome ? "40px" : 0};
                        margin-top: 120px;
                    }
                    .featured {
                        display: flex;
                        background: white;
                        width: 100%;
                        /*top: -20px;*/
                        position: relative;
                        flex-direction: column;
                        align-items: center;
                        padding: 0 40px 40px;
                    }

                    .profile-pic {
                        width: 200px;
                        height: 200px;
                        border: 5px solid #fff;
                        border-radius: 50%;
                        margin-top: -100px;
                        box-shadow: inset 2px 0px 4px rgba(0, 0, 0, 0.5),
                            0 2px 4px rgba(233, 233, 233, 1);
                    }
                    .profile-pic img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                    .intro {
                        margin-top: 20px;
                        color: #3a0088;
                        text-align: center;
                    }
                    .intro h1 {
                        padding: 0;
                        margin: 0;
                        font-size: 40px;
                        font-size: 2.5rem;
                        font-weight: 700;
                        font-family: "Roboto Slab", Roboto, Arial, Helvetica,
                            sans-serif;
                    }
                    .intro p {
                        font-size: 24px;
                        font-size: 1.5rem;
                        color: #23446b;
                        font-family: Roboto, Arial, Helvetica, sans-serif;
                    }
                    .intro span {
                        color: #0b1d2899;
                        color: hsla(203, 55%, 10%, 0.8);
                        font-style: italic;
                        font-size: 18px;
                        font-size: 1.125rem;
                        font-family: Roboto, Arial, Helvetica, sans-serif;
                    }
                    amp-img {
                        border-radius: 50%;
                    }

                    @media all and (max-width: 768px) {
                        .featured {
                            padding: 0 20px 20px;
                        }
                        .profile-pic {
                            width: 150px;
                            height: 150px;
                        }
                        .intro h1 {
                            font-size: 32px;
                            font-size: 2rem;
                        }
                        .intro p {
                            font-size: 20px;
                            font-size: 1.25rem;
                        }
                        .intro span {
                            font-size: 16px;
                            font-size: 1rem;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default AuthorBio;
