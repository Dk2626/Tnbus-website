import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './ContactScreen.css';
import Footer from '../Components/Footer';

const ContactScreen = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    queryType: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitQueryData = (e) => {
    e.preventDefault();
    setValues({
      name: '',
      email: '',
      mobileNumber: '',
      queryType: '',
      comments: '',
    });
  };

  const { name, email, comments, mobileNumber } = values;

  return (
    <>
      <Navbar />
      <div className='Contactmain'>
        <h1 className='ContactmainH'>Contact Us</h1>
      </div>
      <div className='address'>
        <div className='add'>
          <h3 className='connect'>Contact Number</h3>
          <p className='locate'>04362288220</p>
        </div>
        <div className='add'>
          <h3 className='connect'>Email Address</h3>
          <p className='locate'>inevitablecodes@gmail.com</p>
        </div>
      </div>
      <div className='contact_info'>
        <div className='box'>
          <h2>Get in Touch</h2>
          <form>
            <div className='inputBox'>
              <input
                value={name}
                type='text'
                name='name'
                required='name'
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
            <div className='inputBox'>
              <input
                value={email}
                type='text'
                name='email'
                required='email'
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className='inputBox'>
              <input
                value={mobileNumber}
                type='text'
                name='mobileNumber'
                required='number'
                onChange={handleChange}
              />
              <label>Mobile number</label>
            </div>
            <div className='inputBox'>
              <textarea
                value={comments}
                required='comments'
                name='comments'
                onChange={handleChange}
              />
              <label>Message</label>
            </div>
            <button className='bt' onClick={submitQueryData}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;
