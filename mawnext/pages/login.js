import { useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from './ExpoPH.png';

const apiUrl = process.env.NEXT_APP_STRAPI_API_BASE_URL;

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

      // Set the token in cookies
      setCookie(null, 'jwt', data.jwt, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      });

      console.log('Cookie Set:', document.cookie);

      // Redirect to the dashboard page
     // router.push('/api/test-strapi');
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
        <Link href="https://www.facebook.com/login">
          <button className={styles.fb}>CONTINUE TO FACEBOOK</button>
        </Link>
        <p className={styles.backto}>
          <a href="./forgotpass" className={styles.log}>
            Forgot Pass?
          </a>
        </p>
        <div className={styles.img}>
          <Image src={logo} alt="Logo" height={50} width={50} />
        </div>
        <p className={styles.Expo}>ExponentialPH</p>
      </div>
    </main>
  );
}