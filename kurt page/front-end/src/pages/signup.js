import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/ExpoPH.png';
import styles from './signup.styles.module.css';
import { useAuth } from '../context/authContext';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Signup() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  // State to hold input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isApplicant: true, // Default value for the dropdown
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'isApplicant' ? value === 'true' : value,
    });
  };
  const handleSignup = async () => {
    try {
      console.log('Request Payload:', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        blocked: false,
        isApplicant: formData.isApplicant,
      });
  
      const response = await axios.post(
        `${apiUrl}/auth/local/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          blocked: false,
          isApplicant: formData.isApplicant,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Signup Response Status:', response.status);
  
      // Assuming a successful signup, you can redirect to the login page
      router.push('/login');
    } catch (error) {
      console.error('Error signing up:', error.message || 'Unknown error');
    }
  };

  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <h1 className={styles.sup}>SIGN UP</h1>
        <p className={styles.supsub}>Sign Up to create an account.</p>
        <h2 className={styles.user}>USERNAME</h2>
        <input
          className={styles.userin}
          type="text"
          placeholder="ENTER YOUR USERNAME"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h3 className={styles.email}>EMAIL</h3>
        <input
          className={styles.emailin}
          type="email"
          placeholder="ENTER YOUR EMAIL"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <h4 className={styles.password}>PASSWORD</h4>
        <input
          className={styles.passin}
          type="password"
          placeholder="ENTER YOUR PASSWORD"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className={styles.formGroup}>
          <label htmlFor="isApplicant" className={styles.label}>
            Are you an applicant?
          </label>
          <select
            className={styles.dropdown}
            name="isApplicant"
            value={formData.isApplicant}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
                  </div>
        <button className={styles.sign} onClick={handleSignup}>
          SIGN UP
        </button>
        <p className={styles.or}>or</p>
        <Link href="https://www.facebook.com/login">
          <button className={styles.fb}>CONTINUE TO FACEBOOK</button>
        </Link>
        <p className={styles.backto}>
          Back to <a href="/login" className={styles.log}>Login</a>
        </p>
        <div className={styles.img}>
          <Image src={logo} alt="Logo" height={50} width={50} />
        </div>
        <p className={styles.Expo}>ExponentialPH</p>
      </div>
    </main>
  );
}
