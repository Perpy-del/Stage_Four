import React from 'react'
import setting from '../images/setting.svg'
import pts01 from '../images/pts01.svg'
import pts02 from '../images/pts02.svg'
import pts03 from '../images/pts03.svg'
import pts04 from '../images/pts04.svg'
import pts11 from '../images/pts11.svg'
import pts12 from '../images/pts12.svg'
import pts13 from '../images/pts13.svg'
import pts14 from '../images/pts14.svg'
import pts21 from '../images/pts21.svg'
import pts22 from '../images/pts22.svg'
import pts23 from '../images/pts23.svg'
import pts24 from '../images/pts24.svg'
import pts31 from '../images/pts31.svg'
import pts32 from '../images/pts32.svg'
import pts33 from '../images/pts33.svg'
import pts34 from '../images/pts34.svg'
import './places.css'

const Places = () => {
  return (
    <div>
      <header>
        <div className='header_content'>
        <h3>Restaurant</h3>
        <h3>Cottage</h3>
        <h3>Castle</h3>
        <h3>fantast city</h3>
        <h3>beach</h3>
        <h3>Carbins</h3>
        <h3>Off-grid</h3>
        <h3>Farms</h3>
        </div>
        <button id='locate'>
        Location 
        <img src={setting} alt='setting'/>
        </button>
      </header>

      <main className='inspiration'>
      <div className='insp'>
          <img src={pts01} alt="Inspiration" />
          <img src={pts02} alt="Inspiration" />
          <img src={pts03} alt="Inspiration" />
          <img src={pts04} alt="Inspiration" />
          <img src={pts11} alt="Inspiration" />
          <img src={pts12} alt="Inspiration" />
          <img src={pts13} alt="Inspiration" />
          <img src={pts14} alt="Inspiration" />
          <img src={pts21} alt="Inspiration" />
          <img src={pts22} alt="Inspiration" />
          <img src={pts23} alt="Inspiration" />
          <img src={pts24} alt="Inspiration" />
          <img src={pts31} alt="Inspiration" />
          <img src={pts32} alt="Inspiration" />
          <img src={pts33} alt="Inspiration" />
          <img src={pts34} alt="Inspiration" />
      </div>
      </main>
    </div>
  )
}

export default Places