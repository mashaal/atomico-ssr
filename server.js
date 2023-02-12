import "atomico/ssr";
import { html } from "atomico";
import { Component } from "./static/component.js";

import { Hono } from "hono";
import { serveStatic } from "hono/serve-static.bun";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) =>
  c.html(`
  <script type="importmap">
      {
        "imports": {
          "atomico": "https://unpkg.com/atomico"
        }
      }
  </script>
  <script src="./static/component.js" type="module"></script>
  ${html`<${Component} value=${100}>
    <div>Message from server!</div>
  </${Component}>`.render()}
`)
);

export default {
  port: 3000,
  fetch: app.fetch,
};
