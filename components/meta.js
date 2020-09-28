import { useAmp } from "next/amp";
import Head from "next/head";

const Meta = () => {
    const isAmp = useAmp();
    return (
        <Head>
            <meta charSet="utf-8" />
            {isAmp ? null : (
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            )}
            {isAmp ? (
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Roboto+Slab:wght@700&display=swap"
                />
            ) : null}
            {isAmp ? (
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.14.0/css/svg-with-js.css"
                />
            ) : null}
        </Head>
    );
};

export default Meta;
