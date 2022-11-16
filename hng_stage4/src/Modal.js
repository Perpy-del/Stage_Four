import React from 'react'
import close from './pages/images/close.svg'
import mmask from './pages/images/m_mask.svg'
import wallet from './pages/images/w_connect.svg'
import chevron from './pages/images/chevron.svg'
import './modal.css'

const Modal = ({ open, onClose }) => {
    if (!open) return null

  return (
    <div className='modal'>
        <div>
                <h3> Connect Wallet </h3>
                <button onClick={onClose}><img src={close} alt="close"/></button>
            </div> <hr />
            <h4> Choose your preferred wallet</h4>
            <div>
            <a href='#mmeta'> 
                <img src={mmask} alt="metamask"/>
                Metamask
            </a>
            <img src={chevron} alt="open"/>
            </div>
            <div>
            <a href='##meta'> 
                <img src={wallet} alt="WalletConnect"/>
                WalletConnect
            </a>
            <img src={chevron} alt="open"/>
            </div>
    </div>
  )
}

export default Modal