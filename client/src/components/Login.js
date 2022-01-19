import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../context';

const Login = () => {
  const [showLogin, setShowLogin] = useContext(LoginContext);

  return (
    <div className={`login-form-container ${showLogin ? 'active' : ''}`}>
      <FontAwesomeIcon
        icon={faTimes}
        id='close-login-form'
        onClick={() => setShowLogin(false)}
      />

      <form action>
        <h3>User Login</h3>
        <input type='email' placeholder='Email' className='box' />
        <input type='password' placeholder='Password' className='box' />
        <p>
          Forgot your password? <a href='#'>Click here</a>
        </p>
        <input type='submit' value='Login' className='btn' />
        <p>
          Don't have an account? <a href='#'>Create one</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
