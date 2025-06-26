import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className="experience" id='Experience'>
        {/*first*/ }
        <div className="achievement">
            <div className="circle">1+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        {/*second*/}
        <div className="achievement">
            <div className="circle">5+</div>
            <span>completed </span>
            <span>Projects</span>
        </div>
        {/*third*/}
        <div className="achievement">
            <div className="circle">1</div>
            <span>companies</span>
            <span>work</span>
        </div>
    
    </div>
  )
}

export default Experience