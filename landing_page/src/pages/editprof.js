import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import styles from './editprof.styles.module.css';
import img from "../../public/Poging DP.jpg";

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const EditProf = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    birthDate: '',
    permanentAddress: '',
    aboutYou: '',
    experience1: '',
  });

  const jwt = Cookies.get('jwt');
  const userId = Cookies.get('id');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) {
          console.error('User ID not found in cookies');
          // Handle error as needed
          return;
        }
  
        const response = await fetch(`${apiUrl}/users/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        if (!response.ok) {
          console.error('Failed to fetch user data for editing');
          // Handle error as needed
          return;
        }
  
        const userDataResponse = await response.json();
        console.log('Fetched User Data:', userDataResponse);
  
        setUserData({
          firstName: userDataResponse.firstName,
          lastName: userDataResponse.lastName,
          mobileNumber: userDataResponse.mobileNumber,
          birthDate: userDataResponse.birthDate,
          permanentAddress: userDataResponse.permanentAddress,
          aboutYou: userDataResponse.aboutYou,
          experience1: userDataResponse.experience1,
        });
      } catch (error) {
        console.error('Error fetching user data for editing:', error.message || 'Unknown error');
      }
    };
  
    if (jwt && userId) {
      fetchUserData();
    }
  }, [jwt, userId]);

  const handleInputChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!userId) {
        console.error('User ID not found in cookies');
        // Handle error as needed
        return;
      }

      const response = await fetch(`${apiUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          data: {
            attributes: userData,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to update user profile:', errorData.message || 'Unknown error');
        // Handle error as needed
        return;
      }

      console.log('User profile updated successfully');
      // Redirect to the profile page after a successful update
      window.location.href = '/profile';
    } catch (error) {
      console.error('Error updating user profile:', error.message || 'Unknown error');
      // Handle error as needed
    }
  };

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
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className={styles.last}>
              <h2 className={styles.ln}>Last Name</h2>
              <input
                className={styles.lnin}
                placeholder="LAST NAME"
                maxLength={20}
                value={userData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              />
            </div>
            <div className={styles.mob}>
              <h3 className={styles.bd}>Birth Date</h3>
              <input
                className={styles.bdin}
                type="date"
                value={userData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
              />
            </div>
          </div>
          <h4 className={styles.addr1}>Permanent Address</h4>
          <input
            className={styles.addr1in}
            placeholder="PERMANENT ADDRESS"
            maxLength={80}
            value={userData.permanentAddress}
            onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
          />
          <input
            className={styles.addr1inn}
            placeholder="PERMANENT ADDRESS"
            maxLength={80}
            value={userData.permanentAddress}
            onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
          />
          <div className={styles.cslog}>
            <h5 className={styles.compslogan}>About You</h5>
            <textarea
              rows={3}
              cols={80}
              className={styles.cslogan}
              placeholder="SHORT DESCRIPTION ABOUT YOU"
              value={userData.aboutYou}
              onChange={(e) => handleInputChange('aboutYou', e.target.value)}
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
              onChange={(e) => handleInputChange('experience1', e.target.value)}
            />
          </div>
          <div className={styles.subton}>
            <button onClick={handleFormSubmit} className={styles.submit}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProf;
