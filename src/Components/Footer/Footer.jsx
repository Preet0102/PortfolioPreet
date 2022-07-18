import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <a href="patelpreet0102@gmil.com"
                className='p'>
              <span >patelpreet0102@gmail.com</span>
            </a>
              
      
            <div className='f-icons'>
                <a href="https://instagram.com/preet_1.2?igshid=YmMyMTA2M2Y=">
                    <Insta color='white' size='3rem'/>
                </a>
                
                <Facebook color='white' size='3rem'/>
                <a href="https://github.com/Preet0102">
                    <Github color='white' size='3rem'/>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer