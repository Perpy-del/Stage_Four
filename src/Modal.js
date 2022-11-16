import ReactDOM from 'react-dom'
import React from 'react'
import close from './pages/images/close.svg'
import mmask from './pages/images/m_mask.svg'
import wallet from './pages/images/w_connect.svg'
import chevron from './pages/images/chevron.svg'
import './modal.css'

const Modal = ({ open, onClose }) => {
    if (!open) return null

  return ReactDOM.createPortal(
    <div className='modal'>
            <div className='c_wallet'>
                <h3> Connect Wallet </h3>
                <button onClick={onClose}><img src={close} alt="close"/></button>
            </div> 
            <h4> Choose your preferred wallet</h4>
            <button className='meta'>
            <a href='#mmeta'> 
                <img src={mmask} alt="metamask"/>
                Metamask
            </a>
            <img src={chevron} alt="open"/>
            </button>
            <button className='wct'>
            <a href='##meta'> 
                <img src={wallet} alt="WalletConnect"/>
                WalletConnect
            </a>
            <img src={chevron} alt="open"/>
            </button>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal