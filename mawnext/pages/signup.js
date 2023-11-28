import Link from "next/link";
import Image from "next/image"; 
import logo from './ExpoPH.png';
import React from 'react';
import styles from './styles.module.css';

export default function Page() {
  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <h1 className={styles.sup}>SIGN UP</h1>
        <p className={styles.supsub}>Sign Up to create an account.</p>
        <h2 className={styles.user}>USERNAME</h2>
        <input className={styles.userin} type="text" placeholder="ENTER YOUR USERNAME"></input>
        <h3 className={styles.email}>EMAIL</h3>
        <input className={styles.emailin} type="email" placeholder="ENTER YOUR EMAIL"></input>
        <h4 className={styles.password}>PASSWORD</h4>
        <input className={styles.passin} type="password" placeholder="ENTER YOUR PASSWORD"></input>
        <button className={styles.sign}>SIGN UP</button>
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