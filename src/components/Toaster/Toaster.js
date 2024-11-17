import { html } from "lit-html";
import "./Toaster.css";

export const Toaster = ({ message, duration = 1500, onHide }) => {
  if (message) {
    setTimeout(() => {
      onHide();
    }, duration);
  }

  return message ? html`<div class="toaster">${message}</div>` : "";
};
