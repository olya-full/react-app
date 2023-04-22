import React from "react";
import ReactDOMServer from "react-dom/server";
import WrappedApp from "./components/App/App";
import { StaticRouter } from "react-router-dom/server";

const render = (url: string, context?: object) => {
  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <WrappedApp />
      </StaticRouter>
    </React.StrictMode>,
    context
  );
  return stream;
}

export default render;