import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import 'boxicons'

function Modal({children, onClose}) {
    return <div className='modal'>
        <div className='modal-content'>
            <button className='close-btn' onClick={onClose}><box-icon type='regular' name='x' size='sm' animation='spin-hover'></box-icon></button>
            {children}
        </div>
    </div>
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}> {children} </Modal>
    , document.getElementById('modal-root')) 
}