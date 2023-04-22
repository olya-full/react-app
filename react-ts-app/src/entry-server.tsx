import React from 'react'
import ReactDOMServer from 'react-dom/server'
import WrappedApp from "./components/App/App";

export function render(url: string, opts?: object) {
  const stream = ReactDOMServer.renderToString(
    <React.StrictMode>
      <WrappedApp />
    </React.StrictMode>
  )
  return stream;
}
