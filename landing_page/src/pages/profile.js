import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './profile.styles.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

// ... (imports)

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = Cookies.get('jwt');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${apiUrl}/profiles/1`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log('Profile Response:', response);

        if (!response.ok) {
          const profileErrorData = await response.json();
          console.error('Profile fetch failed:', profileErrorData.message || 'Unknown error');
          throw new Error(`Profile Error: ${profileErrorData.message || 'Unknown error'}`);
        }

        const userDataResponse = await response.json();
        console.log('User Data:', userDataResponse);

        if (userDataResponse && userDataResponse.data && userDataResponse.data.attributes) {
          const userAttributes = userDataResponse.data.attributes;

          setUserData({
            firstName: userAttributes.firstName,
            lastName: userAttributes.lastName,
            mobileNumber: userAttributes.mobileNumber,
            birthDate: userAttributes.birthDate,
            permanentAddress: userAttributes.permanentAddress,
            aboutYou: userAttributes.aboutYou,
            experience1: userAttributes.experience1,
          });
        } else {
          setUserData(null); // User not found or missing attributes, set userData to null
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message || 'Unknown error');
        setError(error);
        setLoading(false);
      }
    };

    if (jwt) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [jwt]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user profile: {error.message || 'Unknown error'}</div>;
  }

  if (!userData) {
    return <div>User not found or missing attributes</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>First Name: {userData.firstName}</div>
      <div className={styles.item}>Last Name: {userData.lastName}</div>
      <div className={styles.item}>Mobile Number: {userData.mobileNumber}</div>
      <div className={styles.item}>Birth Date: {userData.birthDate}</div>
      <div className={styles.item}>Permanent Address: {userData.permanentAddress}</div>
      <div className={styles.item}>About You: {userData.aboutYou}</div>
      <div className={styles.item}>Experience: {userData.experience1}</div>
    </div>
  );
}
