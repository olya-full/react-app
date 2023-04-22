import React from "react";
import ReactDOMServer from "react-dom/server";
import WrappedApp from "./components/App/App";
import { StaticRouter } from "react-router-dom/server";

export function render(url: string, context?: object) {
  const stream = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <WrappedApp />
      </StaticRouter>
    </React.StrictMode>
  );
  return stream;
}
