import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './login.styles.module.css';
import Image from 'next/image';
import logo from '/public/ExpoPH.png';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Login() {
 const router = useRouter();
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const { login } = useContext(AuthContext);

 const handleLogin = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      });

      console.log('Response Status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message || 'Unknown error');
        throw new Error('Login failed');
      }

      const data = await response.json();

      console.log('JWT Token:', data.jwt);

      // Call the login function from the context to handle authentication
      // Pass the jwt token to the login function
      login(data.jwt);

      // Set the jwt key in a cookie named 'jwt'
      Cookies.set('jwt', data.jwt);
      const userResponse = await fetch(`${apiUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${data.jwt}`,
        },
      });

      if (!userResponse.ok) {
        console.error('Failed to fetch user data');
        throw new Error('Failed to fetch user data');
      }

      const userData = await userResponse.json();

      console.log('User Data:', userData);

      // Call the login function from the context to handle authentication
      // Pass the jwt token and user data to the login function
      login(data.jwt, userData);

      // Set the jwt key in a cookie named 'jwt'
      Cookies.set('jwt', data.jwt);

      // Extract the slug from the user data and set it in a cookie named 'slug'
      const { slug } = userData; // Change this line based on your actual user data structure
      if (slug) {
        Cookies.set('slug', slug);

        // Redirect to the existing profile page with the obtained slug
        router.push('/');
      } else {
        // Handle the case where there's no slug in the user data
        console.error('No slug found in user data');
        // You might want to redirect to a default profile page or handle this differently
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