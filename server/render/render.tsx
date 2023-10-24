import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export default (req: Request, res: Response) => {
  const { devMiddleware } = res.locals.webpack;
  const jsonWebpackStats = devMiddleware.stats.toJson();
  const { assetsByChunkName } = jsonWebpackStats;
  const script = assetsByChunkName.main[0];

  let html = fs.readFileSync(
    path.resolve(__dirname, "../../../assets/index.html"),
    {
      encoding: "utf8",
    }
  );

  if (process.env.NODE_ENV === "development") {
    delete require.cache[require.resolve("../../../bundle/ssr.client.js")];
  }

  const App = require("../../../bundle/ssr.client.js").default;

  const reactHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  html = html.replace(
    '<div id="root"></div>',
    `
                <div id="root">${reactHtml}</div>
                <script defer src="${script}"></script>
  `
  );

  // set header and status
  res.contentType("text/html");
  res.status(200);

  return res.send(html);
};
