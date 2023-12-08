import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './profile.styles.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import img from "../../public/Poging DP.jpg";
import fb from "../../public/fb.png";
import google from "../../public/google.png";
import linkedin from "../../public/linkedin.png";

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
        // Fetch the user ID from cookies
        const userId = Cookies.get('id');
  
        // Make sure there is a user ID before making the request
        if (!userId) {
          throw new Error('User ID not found in cookies');
        }
  
        const response = await fetch(`${apiUrl}/profiles/${userId}`, {
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
                <Image src={userData.Image} 
                alt="DP" 
                layout="fill"
                objectFit="cover" />
              </div>
              <p className={styles.fullname}>Charles Feria</p>
              <div className={styles.upl}>
                <Link href="/editprof">Edit Profile</Link>
              </div>
            </div>
          </div>
          <div className={styles.editprof}>
            <h1 className={styles.sup}>PROFILE PAGE</h1>
            <div className={styles.name}>
              <div className={styles.first}>
                <h2 className={styles.fn}>First Name</h2>
                <p className={styles.fnin}>{userData.firstName}</p>
              </div>
              <div className={styles.last}>
                <h2 className={styles.ln}>Last Name</h2>
                <p className={styles.lnin}>{userData.lastName}</p>
              </div>
            </div>
            <div className={styles.datemob}>
              <div className={styles.date}>
                <h3 className={styles.mn}>Mobile Number</h3>
                <p className={styles.mnin}>{userData.mobileNumber}</p>
              </div>
              <div className={styles.mob}>
                <h3 className={styles.bd}>Birth Date</h3>
                <p className={styles.bdin}>{userData.birthDate}</p>
              </div>
            </div>
            <h4 className={styles.addr1}>Permanent Address</h4>
            <p className={styles.addr1in}>{userData.permanentAddress}</p>
            <div className={styles.cslog}>
              <h5 className={styles.compslogan}>About You</h5>
              <p className={styles.cslogan}>{userData.aboutYou}</p> 
            </div>
          </div>
          <div className={styles.exp}>
            <h1 className={styles.expp}>EXPERIENCES</h1>
            <div className={styles.exp1}>
              <h2 className={styles.expp1}>Experience 1</h2>
              <p className={styles.exp1in}>{userData.experience1}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }