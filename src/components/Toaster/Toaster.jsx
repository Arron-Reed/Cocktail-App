import React, { useEffect } from "react";
import "./Toaster.css";

const Toaster = ({
  message,
  duration = 1500,
  onHide,
}) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onHide();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onHide]);

  return message ? <div className="toaster">{message}</div> : null;
};

export default Toaster;