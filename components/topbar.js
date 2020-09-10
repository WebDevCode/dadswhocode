const { default: Container } = require("./container");

const TopBar = ({ children }) => {
    return (
        <>
            <div className="top-bar">{children}</div>
            <style jsx>
                {`
                    .top-bar {
                        display: flex;
                        background-color: #fff;
                    }
                `}
            </style>
        </>
    );
};

export default TopBar;
