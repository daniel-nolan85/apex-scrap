import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import HomeSection from './pages/home/HomeSection';
import { LoginProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <LoginProvider>
      <Navbar />
      <ToastContainer />
      <Login />
      <Switch>
        <Route exact path='/' component={HomeSection} />
      </Switch>
    </LoginProvider>
  );
};

export default App;
