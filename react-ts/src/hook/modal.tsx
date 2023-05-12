import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    styles?: React.CSSProperties;
};

const Modal = ({ children, onClose, isOpen, styles }: ModalProps) => {
    return isOpen ? ReactDOM.createPortal(
        <div
            className="fixed  bg-[#373F463D] opacity-100 inset-0 flex "
        >
            <div
                className="fixed end-0  bg-white px-[42px] py-8"
                style={styles}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    ) : null;
};

export default Modal;
