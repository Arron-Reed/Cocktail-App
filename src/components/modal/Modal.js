import { html } from "lit-html";
import { component, useEffect } from "haunted";

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
  <link rel="stylesheet" href="/src/components/modal/Modal.css" />
  <link rel="stylesheet" href="/src/styles.css" />

    <div class="modal-overlay" @click="${handleOverlayClick}">
      <div class="modal-content">
        <button class="modal-close" @click="${onClose}">&times</button>
        <div class="modal-body">${content}</div>
      </div>
    </div>
  `;
};

customElements.define("popup-modal", component(Modal));
