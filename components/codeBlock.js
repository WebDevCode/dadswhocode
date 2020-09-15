import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={a11yDark}
            customStyle={{
                backgroundColor: "#0c1e29",
                width: "100%",
            }}
            codeTagProps={{ whiteSpace: "pre-wrap" }}
        >
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
