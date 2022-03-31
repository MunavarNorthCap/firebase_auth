import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

export default function Signup() {
  // const emailRef = useRef();
  // const passwordRef = useRef();

  const { signup } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setEmailError('')
      setPasswordError('')
      setLoading(true)
      await signup(email, password)
    } catch {
      setEmailError('Failed to Sign in')      
      setPasswordError('Password Error to Sign in')
    }

    setLoading(false);
  }
  
  return (
    <>{emailError} - {passwordError}
      <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 mt-5">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="">Email</label><br />
            <input type="email" className="ew"
              autoFocus
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="">Password</label><br />
            <input type="password" className="pw" 
              autoFocus
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" disabled={loading}>SIGN UP</button>
          </div>
          </form>
          <div className="mt-5">
            <p className="d-flex justify-content-center">Already a user? 
              <Link to='/login' element={<Login />} className="mx-2">Login</Link>
            </p>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    </>
  );
};
