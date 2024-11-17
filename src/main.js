import { html, render } from "lit-html";
import "./index.css";
import "./App";

const rootElement = document.getElementById("root");

render(html`<cocktail-app></cocktail-app>`, rootElement);
