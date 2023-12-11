import { useEffect, useState } from 'react';
import styles from './profile.styles.module.css';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve JWT token from cookies
  const jwt = Cookies.get('jwt');
  
  // Get slug from cookies
  const slug = Cookies.get('slug');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check if slug is available before making the API request
        if (!slug) {
          throw new Error('Slug is missing');
        }

        const response = await fetch(`${apiUrl}/users?slug=${slug}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log('Profile Response Status:', response.status);

        if (!response.ok) {
          const profileErrorData = await response.json();
          console.error('Profile fetch failed:', profileErrorData.message || 'Unknown error');
          throw new Error(`Profile Error: ${profileErrorData.message || 'Unknown error'}`);
        }

        const data = await response.json();

        if (data.length > 0) {
          // Assuming there's only one user with the given slug
          const user = data[0];

          setUserData({
            firstName: user.firstName,
            lastName: user.lastName,
            mobileNumber: user.mobileNumber,
            birthDate: user.birthDate,
            permanentAddress: user.permanentAddress,
            aboutYou: user.aboutYou,
            experience1: user.experience1,
          });

          setLoading(false);
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message || 'Unknown error');
        setError(error);
        setLoading(false);
      }
    };

    // Check if JWT token is available before making the API request
    if (jwt) {
      fetchUserData();
    } else {
      // Handle the case where JWT token is not available
      setLoading(false);
    }
  }, [jwt, slug]);

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