import React, { useRef } from 'react';
import './App.css';
import Modal from './components/Modal';

const App = () => {
    const modalRef = useRef(null);

    const onOpen = () => {
        modalRef.current.open();
    };

    const onClsoe = () => {
        modalRef.current.hide();
    };

    return (
        <div>
            <Modal ref={modalRef}>
                <Modal.Header title='Hello World' />
                <Modal.Body description='Гравировка клавиатур ноутбука Apple macbook Air всех моделей и всех годов производства сверхмощным диодным заводским лазером в течении 5 минут. Качество 100% оригинальных букв.https://pk.by/index.pl?act=PRODUCT&id=6880' />
                <Modal.Footer footer='George' />
            </Modal>
            <div>
                <button onClick={onOpen}>Open modal</button>
                <button onClick={onClsoe}>Close modal</button>
            </div>
        </div>
    );
};

export default App;
