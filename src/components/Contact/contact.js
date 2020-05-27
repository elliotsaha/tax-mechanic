import React, { useState } from 'react'
import { Axios, db } from '../../firebase/index';
import "../../Sass/Contact/contact.scss";
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={updateInput}
          value={formData.firstname || ''}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={updateInput}
          value={formData.lastname || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={updateInput}
          value={formData.phone || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm