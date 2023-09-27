import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    // if (password !== confirmPassword) {
    //   setError('Passwords do not match');
    // } else {
    //   // Simulate successful registration
    //   setError('');
    // }
    navigate('/Tasklist');
    // window.location.href = "./Tasklist";
  };

  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          <h1 className='heading'>Task Bender</h1>
          <p className='head2'>Helps you keep organized</p>
          <h2>Register</h2>
          <span>
            Already have an account? <Link to="/Form">Sign In</Link>
          </span>
          <form id='form' className='flex flex-col'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className='btn' onClick={handleRegistration}>Register</button>
            {/* {error && <p className='error'>{error}</p>} */}
          </form>
        </div>
        <div className='col-2'>
          <img src={logo1} alt="registration" />
        </div>
      </div>
    </section>
  );
}

export default Register;
