import Link from 'next/link';
import styles from './editprof.styles.module.css';
import Image from 'next/image';
import img from '../../public/Poging DP.jpg';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios'; // Import Axios

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = Cookies.get('jwt');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/profiles/${Cookies.get('User ID')}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log('Profile Response:', response);

        if (!response.data) {
          console.error('Profile fetch failed:', response.statusText || 'Unknown error');
          throw new Error(`Profile Error: ${response.statusText || 'Unknown error'}`);
        }

        const userDataResponse = response.data;
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
          setUserData(null);
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

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/profiles/${Cookies.get('User ID')}`, // Update with your API endpoint
        {
          data: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            mobileNumber: userData.mobileNumber,
            birthDate: userData.birthDate,
            permanentAddress: userData.permanentAddress,
            aboutYou: userData.aboutYou,
            experience1: userData.experience1,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
  
      console.log('Update Profile Response:', response.data);
  
      if (!response.data) {
        console.error('Update profile failed:', 'Unknown error');
        throw new Error('Update Profile Error: Unknown error');
      }
  
      // Handle successful update, if needed
      console.log('Profile updated successfully');
      window.location.href = '/profile';
    } catch (error) {
      console.error('Error updating user profile:', error.message || 'Unknown error');
      setError(error);
  
      // Log the detailed error from the server
      if (error.response) {
        console.error('Server error details:', error.response.data);
      }
    }
  };
  
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
    <main className={styles.maincon}>
      <div className={styles.oblong}>
      {/* Home button */}
      <div className={styles.homeButton}>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.prof}>
          <div className={styles.imgprof}>
            <div className={styles.imgg}>
              <Image src={img} alt="DP" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.upl}>
              <input className={styles.photo} type="file" accept="image/*" />
            </div>
          </div>
        </div>
        <div className={styles.editprof}>
          <h1 className={styles.sup}>PROFILE PAGE SETTINGS</h1>
          <div className={styles.name}>
            <div className={styles.first}>
              <h2 className={styles.fn}>First Name</h2>
              <input
                className={styles.fnin}
                placeholder="FIRST NAME"
                maxLength={20}
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
            </div>
            <div className={styles.last}>
              <h2 className={styles.ln}>Last Name</h2>
              <input
                className={styles.lnin}
                placeholder="LAST NAME"
                maxLength={20}
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.datemob}>
            <div className={styles.date}>
              <h3 className={styles.mn}>Mobile Number</h3>
              <input
                className={styles.mnin}
                placeholder="MOBILE NUMBER"
                maxLength={15}
                value={userData.mobileNumber}
                onChange={(e) => setUserData({ ...userData, mobileNumber: e.target.value })}
              />
            </div>
            <div className={styles.mob}>
              <h3 className={styles.bd}>Birth Date</h3>
              <input
                className={styles.bdin}
                type="date"
                value={userData.birthDate}
                onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })}
              />
            </div>
          </div>
          <h4 className={styles.addr1}>Permanent Address</h4>
          <input
            className={styles.addr1in}
            placeholder="PERMANENT ADDRESS"
            maxLength={80}
            value={userData.permanentAddress}
            onChange={(e) => setUserData({ ...userData, permanentAddress: e.target.value })}
          />
          <input
            className={styles.addr1inn}
            placeholder="PERMANENT ADDRESS"
            maxLength={80}
            value={userData.permanentAddress}
            onChange={(e) => setUserData({ ...userData, permanentAddress: e.target.value })}
          />
          <div className={styles.cslog}>
            <h5 className={styles.compslogan}>About You</h5>
            <textarea
              rows={3}
              cols={80}
              className={styles.cslogan}
              placeholder="SHORT DESCRIPTION ABOUT YOU"
              value={userData.aboutYou}
              onChange={(e) => setUserData({ ...userData, aboutYou: e.target.value })}
            />
          </div>
        </div>
        <div className={styles.exp}>
          <h1 className={styles.expp}>EXPERIENCES</h1>
          <div className={styles.exp1}>
            <h2 className={styles.expp1}>Experience 1</h2>
            <input
              className={styles.exp1in}
              placeholder="EXPERIENCE 1"
              maxLength={20}
              value={userData.experience1}
              onChange={(e) => setUserData({ ...userData, experience1: e.target.value })}
            />
          </div>
          <div className={styles.subton}>
            <button onClick={handleUpdateProfile} className={styles.submit}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
