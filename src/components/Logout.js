// import { useAuth } from '../contexts/AuthContext';

const Logout = ({ handleLogout }) => {

  // const handleLogout = () => {
  //   fire.auth().signOut();
  //   navigate('/login')
  // }

  return <button onClick={handleLogout} 
    className="btn btn-danger m-2"> Logout </button>
}

export default Logout;
