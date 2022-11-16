import React from 'react'
import metaimage from '../images/headerimg.svg'
import token from '../images/mbk.svg'
import mask from '../images/metamask.svg'
import open from '../images/open.svg'
import dkg1 from '../images/dkg1.svg'
import dkg2 from '../images/dkg2.svg'
import dkg3 from '../images/dkg3.svg'
import dkg4 from '../images/dkg4.svg'
import dkg11 from '../images/dkg11.svg'
import dkg12 from '../images/dkg12.svg'
import dkg13 from '../images/dkg13.svg'
import dkg14 from '../images/dkg14.svg'
import simage from '../images/secimage.svg'

import './home.css'

const Home = () => {
  return (
    <div>
    <header className='header_container'>
        <div className='top_content'>
            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span className='verse'>Metaverse</span> </h1>
            <p> we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className='search'>
                <input type="text" placeholder='Search for location' id='location'/> 
                <button id='search'>Search</button>
            </div>
        </div>
        <img src={metaimage} alt="image_sample" />
    </header>

    <section className="midsection">
      <img src={token} alt="MB Token" />
      <img src={mask} alt="Metamask" />
      <img src={open} alt="Open" />
    </section>

    <section className='first_section'>
      <h1>Inspiration for your next adventure</h1>
      <div className='inspiration'>
          <img src={dkg1} alt="Inspiration" />
          <img src={dkg2} alt="Inspiration" />
          <img src={dkg3} alt="Inspiration" />
          <img src={dkg4} alt="Inspiration" />
          <img src={dkg11} alt="Inspiration" />
          <img src={dkg12} alt="Inspiration" />
          <img src={dkg13} alt="Inspiration" />
          <img src={dkg14} alt="Inspiration" />
      </div>
    </section>

    <section className='second_section'>
      <div className='content'>
        <h1>Metabnb NFTs</h1>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a href="#learn"> Learn More </a>
      </div>
      <img src={simage} alt="Meta" />
    </section>
    </div>
  )
}

export default Home