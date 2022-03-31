import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logout from './Logout';

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    function handleLogout() {
        setError('')

        try {
            logout()
            navigate('/login')
        } catch {
            setError('Failed to logout..!')
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="d-flex mt-3">
                        <h1 className='flex-grow-1'>POST</h1>
                        {error}
                        <p className='mt-3'><strong>Email:</strong> {currentUser.email}</p>
                        <Logout handleLogout={handleLogout} />
                    </div>

                    <div className='d-flex justify-content-center mt-5 border'>
                        <input type="text" name="Post Text" id="postText" />
                        <input type="file" name='Upload Image' id='imgUpload' />
                    
                        <button type='submit' className='btn btn-success m-2'>POST</button>
                    </div>

                    <div className='col-4'></div>
                    <div className="col-4">
                    <div className="card mt-3 ">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                    </div>
                    <div className='col-4'></div>
                    
                </div>
            </div>
        </>
    )
}