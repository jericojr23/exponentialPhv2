import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './login.styles.module.css';
import Image from 'next/image';
import logo from '/public/ExpoPH.png';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import Cookies from 'js-cookie';
import axios from 'axios'; // Import Axios

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/local`, {
        identifier: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response Status:', response.status);

      const data = response.data;

      console.log('JWT Token:', data.jwt);
      console.log('User ID:', data.user.id);

      // Check if 'isApplicant' is present in the user object in the response data
      if ('user' in data && 'isApplicant' in data.user) {
        console.log('isApplicant:', data.user.isApplicant);

        // Call the login function from the context to handle authentication
        // Pass the jwt token to the login function
        login(data.jwt);

        // Set the jwt key and 'isApplicant' in cookies
        Cookies.set('jwt', data.jwt);
        Cookies.set('User ID', data.user.id);
        Cookies.set('isApplicant', data.user.isApplicant.toString());

        // Redirect to the landing page
        router.push('/');
      } else {
        console.error('Login failed: Missing isApplicant attribute in response data');
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login failed', error);
      // Show error message box
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <h1 className={styles.sup}>LOGIN</h1>
        <p className={styles.supsub}>Login to your account.</p>
        <h2 className={styles.email}>EMAIL or USERNAME</h2>
        <input
          className={styles.emailin}
          type="email"
          placeholder="ENTER YOUR EMAIL/USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3 className={styles.password}>PASSWORD</h3>
        <input
          className={styles.passin}
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.login} onClick={handleLogin}>
          LOGIN
        </button>
        <Link href="./signup">
          <button className={styles.sign}>SIGN UP</button>
        </Link>
        <p className={styles.or}>or</p>

        <p className={styles.backto}>
          <a href="./forgotpass" className={styles.log}>
            Forgot Pass?
          </a>
        </p>
        <div className={styles.img}>
          <Link href="/" passHref>
            <Image src={logo} alt="Logo" height={50} width={50} />
          </Link>
        </div>
        <p className={styles.Expo}>ExponentialPH</p>
      </div>
    </main>
  );
}
