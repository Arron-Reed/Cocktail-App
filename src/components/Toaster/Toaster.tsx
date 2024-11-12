import React from "react";

interface ToasterProps {
  message: string;
}

const Toaster: React.FC<ToasterProps> = ({ message }) => {
  return message ? <div className="toaster">{message}</div> : null;
};

export default Toaster;