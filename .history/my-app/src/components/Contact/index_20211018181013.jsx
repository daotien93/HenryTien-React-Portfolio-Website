import React, { useRef, useState, useContext} from 'react'
import '../Contact/contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = event => {
        event.preventDefault()
        
    emailjs.sendForm('service_ga2cbs6', 'template_7de5fsh', formRef.current, 'user_iwm0Csau51DqBwWhAmLYy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className='contact'>
            <div className="contact-background"></div>
                <div className="contact-wrapper">
                    <div className="contact-wrapper__left">
                        <h1 className="contact-wrapper__title">My Information</h1>
                        <div className="contact-info">
                            <div className="contact-info__item">
                                    <img
                                        src={Phone}
                                        alt='phone'
                                        className="contact-icon"
                                    />
                                    0968389108
                            </div>
                            <div className="contact-info__item">
                                    <img
                                        src={Address}
                                        alt='address'
                                        className="contact-icon"
                                    />
                                    DAK LAK
                            </div>
                            <div className="contact-info__item">
                                    <img
                                        src={Email}
                                        alt='email'
                                        className="contact-icon"
                                    />
                                    vanttien93@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrapper__right">
                        <p className="contact-desc">
                           Please enter information if you want contact to me !!!
                        </p>
                        <form ref = {formRef} onSubmit ={handleSubmit}>
                            <input style={{backgroundColor : darkMode ? '#333' : ''}} type="text" placeholder="Name" name="user_name" />
                            <input style={{backgroundColor : darkMode ? '#333' : ''}} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{backgroundColor : darkMode ? '#333' : ''}} type="email" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor : darkMode ? '#333' : ''}}  name="message" rows="5" placeholder="Message contact"></textarea>
                        <button style={{backgroundColor: darkMode ? "black" : "white", color: darkMode && "white",
                          }} >Submit</button>
                        {done && 'Thank you for your contact'}
                        </form>         
                    </div>
                </div>
        </div>
    )
}

export default Contact
