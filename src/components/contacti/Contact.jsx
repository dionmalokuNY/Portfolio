import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import Insta from '../../img/insta.png';
import Linkedin from '../../img/linkedin.png';
import Github from '../../img/github.png';


// #2c2cbb
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_kdfpv0c',
            'template_gh2v5w7',
            formRef.current,
            'user_qZvgdNt3VcOFF26kksQNr')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
      <div className='contact-container'>
          <div className="contact-bg"></div>
          <div className="row w-100">
              <div className="col-md-6">
                  <h1 className="contact-title">
                      Contact me
                  </h1>
                  <div className="contact-info">
                      <div className="contact-info_item">
                          <img 
                          src={Phone} 
                          alt="phone" 
                          className="contact-icon" />
                          +383-49-872-729
                      </div>
                      <div className="contact-info_item">
                          <img 
                          src={Email} 
                          alt="email" 
                          className="contact-icon" />
                          dionn.maloku@outlook.com
                      </div>
                      <div className="contact-info_item">
                          <img 
                          src={Address} 
                          alt="address" 
                          className="contact-icon" />
                          Henry Dynan Nr.7
                      </div>
                      <div className='d-flex mr-0'>
                        <div className="contact-info_item">
                            <a href="https://www.instagram.com/dion.malokuu/" target="_blank" rel="noreferrer">
                            <img 
                            src={Insta} 
                            alt="instagram" 
                            className="contact-icon" />
                            </a>
                        </div>
                        <div className="contact-info_item">
                            <a href="https://www.linkedin.com/in/dion-maloku-aa3816220/" target="_blank" rel="noreferrer">
                                <img    
                                src={Linkedin} 
                                alt="linkedin" 
                                className="contact-icon" />
                            </a>
                        </div>
                        <div className="contact-info_item">
                            <a href="https://github.com/dionmalokuNY" target="_blank" rel="noreferrer">
                                <img 
                                src={Github} 
                                alt="github" 
                                className="contact-icon" />
                            </a>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <p className="contact-desc">
                  <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along.
                  </p>
                  <form ref={formRef} onSubmit={sendEmail}>
                      <div class="mb-3">
                      <input type="text" class="form-control mb-2" id="exampleFormControlInput1" placeholder='Name' name='user_name' spellCheck="false" required />
                      <input type="text" class="form-control mb-2" id="exampleFormControlInput1" placeholder='Subject' name='user_subject' spellCheck="false" required />
                        <input type="email" class="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com" spellCheck="false" required />
                        </div>
                        <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter your message' rows="3" name='message' spellCheck="false" required></textarea>
                        </div>
                        <button type="submit" class="btn">Submit</button>
                        {done && "Thank you :)"}
                  </form>
              </div>
          </div>
      </div>
  )
};

export default Contact;
