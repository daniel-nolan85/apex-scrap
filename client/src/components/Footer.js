import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='box-container'>
        <div className='box'>
          <h3>Quick Links</h3>
          <Link to='#home'>
            <FontAwesomeIcon icon={faArrowCircleRight} className='i' /> Home
          </Link>
          <Link to='#scrap'>
            <FontAwesomeIcon icon={faArrowCircleRight} className='i' /> Scrap My
            Vehicle
          </Link>
          <Link to='#reviews'>
            <FontAwesomeIcon icon={faArrowCircleRight} className='i' /> Reviews
          </Link>
          <Link to='#contact'>
            <FontAwesomeIcon icon={faArrowCircleRight} className='i' /> Contact
          </Link>
        </div>

        <div className='box'>
          <h3>Contact Us</h3>
          <a href='#'>
            <FontAwesomeIcon icon={faPhone} className='i' /> +123-456-7890
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faEnvelope} className='i' />{' '}
            contact@email.com
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='i' /> Hendon,
            London, UK
          </a>
        </div>

        <div className='box'>
          <h3>Socials</h3>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook} className='i' /> Facebook
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} className='i' /> Twitter
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagram} className='i' /> Instagram
          </a>
        </div>
      </div>
      <p className='credit'>ApexScrap &copy; {new Date().getFullYear()}</p>
    </section>
  );
};

export default Footer;
