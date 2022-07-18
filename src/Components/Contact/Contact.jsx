import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';


const Contact = () => {

    /*Copy from Emailjs website*/
    const form = useRef();
    const [done,setDone]=useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dab9abd', 'template_dib1d8q', form.current, 'rI4gP989OlceYV-rr')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    /*till here copy from emailjs website*/

  return (
    <div className="contact-form" id='Contact'>
        {/*left part*/}
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

        {/*right part*/}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email' id="" />
                <textarea name="message" id="" className='user' placeholder='Message' cols="" rows=""/>
                <input type="submit" value="Send" className="button" name="" id="" />
                <span className='c-reply'>{done && "Thnx for contacting me"}</span>
                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}
export default Contact;