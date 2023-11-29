import { useEffect, useState } from 'react';
import styles from './profile.styles.module.css';
import { username, password, jwt } from '/src/pages/login';
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleProfile = async () => {
      try {
        const response = await fetch(`${apiUrl}/auth/profiles/1`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
          },
        });

        console.log('Profile Response Status:', response.status);

        if (!response.ok) {
          const profileErrorData = await response.json();
          console.error('Profile fetch failed:', profileErrorData.message || 'Unknown error');
          throw new Error('Profile Error');
        }

        const data = await response.json();

        setUserData({
          firstName: data.attributes.firstName,
          lastName: data.attributes.lastName,
          mobileNumber: data.attributes.mobileNumber,
          birthDate: data.attributes.birthDate,
          permanentAddress: data.attributes.permanentAddress,
          aboutYou: data.attributes.aboutYou,
          experience1: data.attributes.experience1,
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message || 'Unknown error');
        setError(error);
        setLoading(false);
      }
    };

    handleProfile();
  }, [jwt]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user profile: {error.message || 'Unknown error'}</div>;
  }

  return (
    <div className={styles.container}>
      {userData && (
        <>
          <div className={styles.item}>First Name: {userData.firstName}</div>
          <div className={styles.item}>Last Name: {userData.lastName}</div>
          <div className={styles.item}>Mobile Number: {userData.mobileNumber}</div>
          <div className={styles.item}>Birth Date: {userData.birthDate}</div>
          <div className={styles.item}>Permanent Address: {userData.permanentAddress}</div>
          <div className={styles.item}>About You: {userData.aboutYou}</div>
          <div className={styles.item}>Experience: {userData.experience1}</div>
        </>
      )}
    </div>
  );
}
