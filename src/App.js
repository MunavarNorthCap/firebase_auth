import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Login from './components/Login';
// import Logout from './components/Logout';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/' exact element={<Layout />}>
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            {/* <Route path='logout' element={<Logout />} /> */}
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
