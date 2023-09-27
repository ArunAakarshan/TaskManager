import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';
function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const navigatetoTask = useNavigate();
  const handleSignIn = () => {
    window.location.href="/Tasklist";
    navigatetoTask('/Tasklist')
  };

  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          <h1 className='heading'>Task Bender</h1>
          <p className='head2'>Helps you keep organized</p>
          <h2>Sign In</h2>
          <span>
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </span>
          <form id='form' className='flex flex-col'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn' onClick={handleSignIn}>
              Sign In
            </button>
            {/* {error && <p className='error'>{error}</p>} */}
          </form>
        </div>
        <div className='col-2'>
          <img src={logo1} alt="signin" />
        </div>
      </div>
    </section>
  );
}

export default Form;
