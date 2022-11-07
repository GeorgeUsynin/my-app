import React, { useState, useImperativeHandle, forwardRef, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const ModalContext = createContext({
    closeModal: () => {},
});

const modal_root_el = document.createElement('div');
modal_root_el.id = 'modal_root';
document.body.appendChild(modal_root_el);
modal_root_el.classList.add('modal-root');

const Modal = forwardRef(({ children }, ref) => {
    const [is_modal_visible, setIsModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsModalVisible(true),
        hide: () => setIsModalVisible(false),
    }));

    if (!is_modal_visible) return null;

    if (modal_root_el) {
        return createPortal(
            <ModalContext.Provider value={{ closeModal: () => setIsModalVisible(false) }}>
                <div className='modal'>{children}</div>
            </ModalContext.Provider>,
            modal_root_el
        );
    }
});

const Header = ({ title }) => {
    const { closeModal } = useContext(ModalContext);

    return (
        <header>
            {title}
            <span onClick={() => closeModal()}>x</span>
        </header>
    );
};

const Body = ({ description }) => {
    return <div>{description}</div>;
};

const Footer = ({ footer }) => {
    return <footer>{footer}</footer>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
