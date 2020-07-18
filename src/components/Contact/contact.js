import React, { useState } from 'react'
import { Axios, db } from '../../firebase/index';
import "../../Sass/Contact/contact.scss";
import ReactPixel from 'react-facebook-pixel';

const setAlert = () => {
  alert('\t\t\t Thank You. \t\t\t\n\nWe will get back to you as soon as possible!')
}
const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('803163109840564', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setAlert()
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      phone: ''
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-taxmechanic-7140d.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          message: formData.message,
          phone: formData.phone,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button shut"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : 647-499-5693</div>
          </div>
        <div className="screen-body-item">
           <div className="app-form">
               <form onSubmit={handleSubmit}>
                    <div className="app-form-group">
                        <input 
                        className="app-form-control"
                        type="text"
                        name="firstname"
                        placeholder="FIRST NAME"
                        onChange={updateInput}
                        value={formData.firstname || ''}
                        />
                    </div>
                    <div className="app-form-group">
                        <input 
                        className="app-form-control"
                        type="text"
          name="lastname"
          placeholder="LAST NAME"
          onChange={updateInput}
          value={formData.lastname || ''}
                        />
                    </div>
                    <div className="app-form-group">
                        <input 
                        className="app-form-control"
                        type="text"
                        name="email"
          placeholder="EMAIL"
          onChange={updateInput}
          value={formData.email || ''}
                        />
                    </div>
                    <div className="app-form-group">
                        <input 
                        className="app-form-control"
                        type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          onChange={updateInput}
          value={formData.phone || ''}
                        />
                    </div>
                    <div className="app-form-group message">
                        <textarea
                        type="text"
                        name="message" 
                        className="app-form-control"
                        placeholder="MESSAGE"
                        onChange={updateInput}
                        value={formData.message || ''}
                        rows="5"
                        ></textarea>
                    </div>
                    <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">SEND</button>
                    </div>
               </form>
            </div> 
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default ContactForm