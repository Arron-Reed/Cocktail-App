import { html } from "lit-html";
import { component } from "haunted";
import "./Modal.css";

export const Modal = ({ show, title, content, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return html`
    <div class="modal-overlay" @click="${handleOverlayClick}">
      <div class="modal-content">
        <button class="modal-close" @click="${onClose}">&times</button>
        <h2>${title}</h2>
        <div class="modal-body">${content}</div>
      </div>
    </div>
  `;
};

customElements.define("reusable-modal", component(Modal, { useShadowDOM: false }));
