import { html, render } from "lit-html";
import "./index.css";
import { App } from "./App.js";

const rootElement = document.getElementById("root");

render(App(), rootElement);

