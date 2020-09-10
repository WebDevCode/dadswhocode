const Container = ({ children }) => (
    <>
        <div className="container">{children}</div>
        <style jsx>{`
            .container {
                display: flex;
                width: 90%;
                max-width: 1200px;
                margin: 0 auto;
                height: auto;
            }
            @media all and (min-width: 568px) {
                .container {
                    width: 85%;
                }
            }
            @media all and (min-width: 768px) {
                .container {
                    width: 80%;
                }
            }
        `}</style>
    </>
);

export default Container;
