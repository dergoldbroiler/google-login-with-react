import logo from './logo.svg';
import './App.css';

import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const responseMessage = (response) => {
    console.log(response);
    setLoggedIn(true);
  };
  const errorMessage = (error) => {
      console.log(error);
      setLoggedIn(false);
  };
  if(loggedIn) return (
    <div className="App">
      <h1>Google Login mit React</h1>
      Super, das hat geklappt!
    </div>
  )
  return (
    <div className="App">
      <h1>Google Login mit React</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}

export default App;
