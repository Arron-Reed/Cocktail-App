import { html } from "lit-html";
import { component, useEffect } from "haunted";
import "./Modal.css";

export const Modal = ({ show, title, content, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);
  
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
        <div class="modal-body">${content}</div>
      </div>
    </div>
  `;
};

customElements.define("reusable-modal", component(Modal, { useShadowDOM: false }));
