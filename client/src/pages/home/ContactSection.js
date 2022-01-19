import React from 'react';
import ContactForm from '../../components/forms/ContactForm';

const ContactSection = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='heading'>
        <span>Contact </span>Us
      </h1>
      <div className='row'>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6714.336507988731!2d-0.22607477485090127!3d51.58698812893406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610c5529a0749%3A0xcdff3537b6aa4a45!2sHendon%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1642485687700!5m2!1sen!2sus'
          allowFullScreen
          loading='lazy'
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
