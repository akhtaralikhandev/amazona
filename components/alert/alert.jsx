import React, { useState } from "react";
import "./alert.css";

const PopupAlert = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`popup-alert ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <p className="text-gray-900">{message}</p>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupAlert;
