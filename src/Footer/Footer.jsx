import React from 'react'
import logo2 from '../images/Group2.svg'
import facebook from '../images/fb.svg'
import instagram from '../images/IG.svg'
import twitter from '../images/twit.svg'
import './footer.css'

const footer = () => {
  return (
    <div className='footer_container'>
         <div className='top_footer'>
          <img src={logo2} alt="footer_image" id='footer_image'/>
          <div className='social_media'>
            <img src={facebook} alt="Facebook" id='fb'/>
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
          <h5>&copy 2022 Metabnb</h5>
         </div>
         <div className='text_content'>
          <div className='row_footer'>
            <a href='#com'>Community</a>
            <a href='#nft'>NFT</a>
            <a href='#toks'>Tokens</a>
            <a href='#landl'>Landlords</a>
            <a href='#dis'>Discord</a>
          </div>
          <div className='row_footer'>
            <a href='#places'>Places</a>
            <a href='#castle'>Castle</a>
            <a href='#farms'>Farms</a>
            <a href='#beach'>Beach</a>
            <a href='#learn'>Learn more</a>
          </div>
          <div className='row_footer'>
            <a href='#about'>About us</a>
            <a href='#road'>Road map</a>
            <a href='#create'>Creators</a>
            <a href='#career'>Career</a>
            <a href='#contact'>Contact us</a>
          </div>
         </div>
    </div>
  )
}

export default footer