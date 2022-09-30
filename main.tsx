import React from "react";
import ReactDomServer from "react-dom/server";

export const View = (props: {msg: string}) => (
    <div className="deno">{props.msg}</div>
)

const s = ReactDomServer.renderToString(<View msg="hello"/>);
console.log(s);