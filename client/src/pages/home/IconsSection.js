import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCar,
  faUsers,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const IconsSection = () => {
  return (
    <section className='icons-container'>
      <div className='icons'>
        <FontAwesomeIcon icon={faHome} className='i' />
        <div className='content'>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <h3>{isVisible ? <CountUp end={10} duration={5} /> : null}</h3>
            )}
          </VisibilitySensor>
          <p>Branches</p>
        </div>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faCar} className='i' />
        <div className='content'>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <h3>{isVisible ? <CountUp end={573} duration={5} /> : null}</h3>
            )}
          </VisibilitySensor>
          <p>Cars Scrapped</p>
        </div>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faUsers} className='i' />
        <div className='content'>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <h3>{isVisible ? <CountUp end={437} duration={5} /> : null}</h3>
            )}
          </VisibilitySensor>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon={faMapMarkerAlt} className='i' />
        <div className='content'>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <h3>{isVisible ? <CountUp end={26} duration={5} /> : null}</h3>
            )}
          </VisibilitySensor>
          <p>Post Codes Covered</p>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
