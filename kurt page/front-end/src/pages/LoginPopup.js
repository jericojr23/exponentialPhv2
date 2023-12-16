// LoginPopup.js
import { useState, useContext } from 'react';
import styles from './login.styles.module.css';
import { AuthContext } from '../context/authContext';
import Cookies from 'js-cookie';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/local`,
        {
          identifier: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      // Call the login function from the context to handle authentication
      // Pass the jwt token to the login function
      login(data.jwt);

      // Set the jwt key in a cookie named 'jwt'
      Cookies.set('jwt', data.jwt);
      Cookies.set('User ID', data.user.id);

      // Close the popup
      onClose();
    } catch (error) {
      console.error('Login failed', error);
      // Show error message box
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {/* Your login form here */}
        <h1 className={styles.sup}>LOGIN</h1>
        {/* ... other login form elements */}
        <button className={styles.login} onClick={handleLogin}>
          LOGIN
        </button>
        {/* ... other login form elements */}
      </div>
    </div>
  );
};

export default LoginPopup;
