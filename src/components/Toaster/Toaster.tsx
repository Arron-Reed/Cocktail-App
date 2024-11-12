import React, { useEffect } from "react";
import "./Toaster.css";

interface ToasterProps {
  message: string;
  duration?: number;
  onHide: () => void;
}

const Toaster: React.FC<ToasterProps> = ({
  message,
  duration = 3000,
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
