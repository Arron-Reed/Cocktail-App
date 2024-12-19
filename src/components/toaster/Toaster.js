import { html } from "lit-html";
import { component, useEffect } from "haunted";
import "./Toaster.css";

export const Toaster = ({ message, duration = 1500, onHide }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(onHide, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onHide]);

  return message ? html`
  <link rel="stylesheet" href="/src/components/toaster/Toaster.css" />
  <link rel="stylesheet" href="/src/styles.css" /><div class="toaster">${message}</div>` : null;
};

customElements.define("toaster-message", component(Toaster));
