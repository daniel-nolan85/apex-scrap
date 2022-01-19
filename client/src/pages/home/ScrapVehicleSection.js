import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ScrapVehicleSection = () => {
  const [reg, setReg] = useState('');
  const [make, setMake] = useState('');
  const [colour, setColour] = useState('');
  const [year, setYear] = useState('');
  const [weight, setWeight] = useState();
  const [loading, setLoading] = useState(false);

  const submitReg = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('https://apex-scrap.herokuapp.com/api/get-car-info', { reg })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setMake(res.data.make);
        setColour(res.data.colour);
        setYear(res.data.yearOfManufacture);
        setWeight(
          res.data.revenueWeight
            ? res.data.revenueWeight
            : res.data.engineCapacity
        );
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <section className='scrap' id='scrap'>
      <h1 className='heading'>
        Scrap Your<span> Vehicle</span>
      </h1>

      <h3>Get an instant free quote now</h3>
      <p>
        Simply enter a UK based registration number to get a quote on your
        vehicle in seconds!
      </p>
      <form action=''>
        <input
          type='text'
          placeholder='Vehicle reg number...'
          value={reg}
          onChange={(e) => setReg(e.target.value)}
        />
        <a type='submit' onClick={submitReg}>
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className='spinner' />
          ) : (
            'Scrap'
          )}
        </a>
      </form>

      {weight && (
        <div className='scrap-results'>
          Make: <span className='scrap-result'>{make}</span> <br />
          Colour: <span className='scrap-result'>{colour}</span> <br />
          Year: <span className='scrap-result'>{year}</span> <br />
          <br />
          <span>We have valued your car at a scrap value of:</span> <br />
          <span className='scrap-result price'>
            £{((weight / 1000) * 230).toFixed(2)}
          </span>
        </div>
      )}
    </section>
  );
};

export default ScrapVehicleSection;
