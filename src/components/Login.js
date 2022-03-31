import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Signup from './Signup';

export default function Login() {
    
    const navigate = useNavigate();
    const { login } = useAuth();

    // const [user, setUser] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    // const [hasAccount, setHasAccount] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [check, setCheck] = useState(false);
    
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setEmailError('')
            setPasswordError('')
            await login(email, password)
            navigate('/dashboard')
        } catch {
            setEmailError('Failed to Sign in')      
            setPasswordError('Password Error to Sign in')
        }

        // setLoading(false);
    }

    const handleCheck = () => {
        setCheck(!check);
    }
    
    return (
        <>
        {/* <UserContext.Provider value={ value }>
            <Dashboard />
            </UserContext.Provider> */}
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 mt-5">
                    <h2>LOGIN</h2>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="mt-3 mb-3">
                        <label htmlFor="">Email</label><br />
                        <input type="email" className="ew" 
                            autoFocus
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <p>{emailError}</p>
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor="">Password</label><br />
                        <input type="password" className="pw" 
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p>{passwordError}</p>
                    </div>
                    <div className="mt-3 mb-3">
                        <input type="checkbox" onClick={handleCheck} />
                        <label className="mx-2">Remember me?</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" 
                        >LOGIN</button>
                    </div>
                    <div className="float-end p-2">Forgot Password?</div>
                    </form>
                    <br /><br /><br />

                    <div className="mt-5">
                        <p className="d-flex justify-content-center">Need an account? 
                            <Link to='/signup' element={ <Signup /> } className="mx-2">SIGN UP</Link> 
                        </p>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
        </>
    )
}