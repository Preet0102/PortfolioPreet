import React from 'react'
import './Works.css'
import Upwork from'../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

function Works() {
  return (
    <div className="works">
      {/*left side*/}
      <div className="awesome">
            <span>Works for all these</span>    
            <span>Brands and Clients</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit 
                <br /> 
                Optio exercitationem amet consequatur. 
                <br />
                Optio exercitationem amet consequatur. 
                <br />
                Lorem ipsum dolor sit amet.
            </span>
            <Link spy={true} to="Contact" smooth={true}>
                <button className="button s-button">
                    Hire me
                </button>
            </Link>
                
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}/>
        </div> 

        {/*right side*/}
        <div className="w-right">
            <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5, type:'spring'}}
            
                className="w-mainCircle">
              <div className="w-secCircle">
                <img src={Upwork} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={Fiverr} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={Amazon} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={Shopify} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={Facebook} alt="" />
              </div>
            </motion.div>
            {/*background circle*/}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works