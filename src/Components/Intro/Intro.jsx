import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'


function Intro() {

  // for the giving motion this one line is most important

  const transition ={duration:2,type:'spring'}

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Preet Patel</span>
                <span> I specialize in cloud platforms such as AWS, Azure, and GCP. Additionally, I have expertise in Infrastructure as Code (IaC) tools like Terraform, as well as technologies for managing infrastructure, including Docker and Kubernetes. also I gained hands-on experience with Jenkins, Github Action, Linux Terminal.
                </span>
            </div>
            <Link spy={true} to="Contact" smooth={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            
            <div className="i-icons">
                <a href="https://github.com/Preet0102">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/preet0102/">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://instagram.com/preet_1.2?igshid=YmMyMTA2M2Y=">
                    <img src={Instagram} alt="" />
                </a>
                
            </div>
        </div>
        <div className="i-right"> 
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            {/*for giving motion*/}
            <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-22%'}}
                transition={transition}
              
                src={glassesimoji} alt="" />
            <motion.div
                initial={{top:'-4%',left:'74%'}}
                whileInView={{left:'60%'}}
                transition={transition}

                style={{top:'-4%',left:'60%'}}>
              <FloatingDiv image={Crown} txt1="DevOps" txt2=''/>
            </motion.div>
            <motion.div 
                initial={{top:'18rem',left:'9rem'}}
                whileInView={{left:'1rem'}}
                transition={transition}
            
                style={{top:'18.2rem',left:'1rem'}}>
              <FloatingDiv image={thumbup} txt1="Flexible" txt2="To change Tools & technologies"/>
            </motion.div>
            {/*blur divs*/}
            <div className="blur" style={{background:'rgb(238 210 255'}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro