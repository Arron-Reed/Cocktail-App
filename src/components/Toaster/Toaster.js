import { html } from "lit-html";
import { component, useEffect } from "haunted";
import "./Toaster.css";

export const Toaster = ({ message, duration = 1500, onHide }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onHide();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return message ? html`<div class="toaster">${message}</div>` : html``;
};

customElements.define("toaster-message", component(Toaster));
