import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import {motion} from 'framer-motion'

function Services() {

    // for the giving motion this one line is most important
    const transition ={duration:1,type:'spring'}

  return (
    <div className="services" id='Services'>

        {/*left side*/}
        <div className="awesome">
            <span>My Awesome</span>    
            <span>services</span>
            <span>
                here i mentioned my resume you can download and see, to know my professional life
            </span>
            <a href={Resume} download>
                <button className="button s-button">
                    Download Resume
                </button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}/>
        </div> 

        {/*right side*/}
        <div className="cards">
            {/*first card*/}
            <motion.div 
                    initial={{left:'25rem'}}
                    whileInView={{left:'14rem'}}
                    transition={transition}

                    style={{left:'14rem'}}>
                <Card
                    emoji={HeartEmoji}
                    heading={'Clouds'}
                    detail={"AWS, Azure, GCP, Digital Ocean"}
                />
            </motion.div>
            {/*second card*/}
            <motion.div 
                    initial={{left:'-14rem'}}
                    whileInView={{left:'-4rem'}}
                    transition={transition}

            
                    style={{top:"12rem", left:"-4rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"IAC Tool & CICD Tool"}
                    detail={"Terraform, Jenkins, Github Action"}
                />
            </motion.div>
            {/*third card*/}
            <motion.div 
                    initial={{left:'23rem'}}
                    whileInView={{left:'12rem'}}
                    transition={transition}

            
                    style={{top:"19rem" , left:"12rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Container Orchastration Technologies"}
                    detail={"Docker, Kubernetes"}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services