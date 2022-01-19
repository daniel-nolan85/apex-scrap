import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Input, TextArea } from './TextFields';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const validate = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup
      .string()
      .email('This email format is invalid')
      .required('Please enter your email'),
    subject: yup
      .string()
      .max(32, 'Subject must not exceed 32 characters')
      .required('Please include a subject'),
    message: yup
      .string()
      .max(2000, 'Message must not exceed 2000 characters')
      .required('Please write your message'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        setLoading(true);
        console.log(values);
        axios
          .post(
            'https://apex-scrap.herokuapp.com/api/contact-form-email',
            values
          )
          .then((res) => {
            setLoading(false);
            toast.success('Your message has been sent!');
            document.getElementById('contact-form').reset();
          })
          .catch();
      }}
    >
      {(formik) => (
        <div className='form'>
          <h3>Get In Touch</h3>
          <Form id='contact-form'>
            <Input
              label='Name'
              name='name'
              type='text'
              placeholder='Full name'
            />
            <Input label='Email' name='email' type='text' placeholder='Email' />
            <Input
              label='Subject'
              name='subject'
              type='text'
              placeholder='Subject'
            />
            <TextArea
              label='Message'
              name='message'
              type='text'
              placeholder='Your message...'
            />

            <div className='btns'>
              <button type='submit' className='btn'>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} className='spinner' />
                ) : (
                  'Submit'
                )}
              </button>
              <button
                type='reset'
                className='btn'
                onClick={() => setLoading(false)}
              >
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
