import React from 'react'
import close from './images/close.svg'
import mmask from './images/m_mask.svg'
import wallet from './images/w_connect.svg'
import chevron from './images/chevron.svg'

const Modal = ({ open, onClose }) => {
    if (!open) return null

  return (
    <div>
        <div>
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
    </div>
  )
}

export default Modal