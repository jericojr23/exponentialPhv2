import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './editprof.styles.module.css';
import img from '../../public/Poging DP.jpg';
import fb from '../../public/fb.png';
import google from '../../public/google.png';
import linkedin from '../../public/linkedin.png';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function EditProf() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    MobileNumber: '',
    BirthDate: '',
    permanentAddress: '',
    AboutYou: '',
    experience1: '',
    experience2: '',
    experience3: '',
    FaceBook: '',
    Google: '',
    LinkedIn: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const jwtToken = Cookies.get('jwt');
  const userSlug = Cookies.get('userSlug'); // Replace 'userSlug' with your actual cookie name

  useEffect(() => {
    // Fetch user data to populate the form
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/${userSlug}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch user data');
        }

        const userData = await response.json();
        setFormData({
          FirstName: userData.firstName,
          LastName: userData.lastName,
          MobileNumber: userData.mobileNumber,
          BirthDate: userData.birthDate,
          permanentAddress: userData.permanentAddress,
          AboutYou: userData.aboutYou,
          experience1: userData.experience1,
          experience2: userData.experience2,
          experience3: userData.experience3,
          FaceBook: userData.FaceBook,
          Google: userData.Google,
          LinkedIn: userData.LinkedIn,
        });
      } catch (error) {
        setError(error.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    if (jwtToken && userSlug) {
      setLoading(true);
      fetchUserData();
    }
  }, [jwtToken, userSlug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${apiUrl}/users/${userSlug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update user data');
      }

      alert('Data submitted successfully');
    } catch (error) {
      setError(error.message || 'Failed to update user data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <div className={styles.prof}>
          <div className={styles.imgprof}>
            <div className={styles.imgg}>
              <Image src={img} alt="DP" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.upl}>
              <input className={styles.photo} type="file" accept="image/*" />
            </div>
          </div>
          <div className={styles.accs}>
            <div className={styles.fb}>
              <div className={styles.fblogo}>
                <Image src={fb} alt="FB" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.fbincon}>
                <input
                  className={styles.fbin}
                  placeholder="Enter Your Facebook Account"
                  maxLength={30}
                  value={formData.FaceBook}
            onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={styles.google}>
              <div className={styles.glogo}>
                <Image src={google} alt="google" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.gincon}>
                <input
                  className={styles.gin}
                  placeholder="Enter Your Google Account"
                  maxLength={30}
                  value={formData.Google}
            onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={styles.linked}>
              <div className={styles.linklogo}>
                <Image src={linkedin} alt="linkedin" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.lincon}>
                <input
                  className={styles.lin}
                  placeholder="Enter Your LinkedIn Account"
                  maxLength={30}
                  value={formData.LinkedIn}
            onChange={handleInputChange}
                ></input>
              </div>
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
              value={formData.FirstName}
            onChange={handleInputChange}
             />
            </div>
            <div className={styles.last}>
              <h2 className={styles.ln}>Last Name</h2>
              <input 
              className={styles.lnin} 
              placeholder="LAST NAME" 
              maxLength={20} 
              value={formData.LastName}
            onChange={handleInputChange}
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
              value={formData.MobileNumber}
            onChange={handleInputChange}/>
            </div>
            <div className={styles.mob}>
              <h3 className={styles.bd}>Birth Date</h3>
              <input className={styles.bdin} type="date" />
            </div>
          </div>
          <h4 className={styles.addr1}>Permanent Address</h4>
          <input 
          className={styles.addr1in} 
          placeholder="PERMANENT ADDRESS" 
          maxLength={80} 
          value={formData.permanentAddress}
            onChange={handleInputChange}/>
          <div className={styles.cslog}>
            <h5 className={styles.compslogan}>About You</h5>
            <textarea
              rows={3}
              cols={80}
              className={styles.cslogan}
              placeholder="SHORT DESCRIPTION ABOUT YOU"
              value={formData.AboutYou}
            onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={styles.exp}>
        <h1 className={styles.expp}>EXPERIENCES</h1>
        <div className={styles.exp1}>
          <h2 className={styles.expp1}>Experience 1</h2>
          <input
            className={styles.exp1in}
            name="experience1"
            placeholder="EXPERIENCE 1"
            maxLength={20}
            value={formData.experience1}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.exp2}>
          <h2 className={styles.expp2}>Experience 2</h2>
          <input
            className={styles.exp2in}
            name="experience2"
            placeholder="EXPERIENCE 2"
            maxLength={20}
            value={formData.experience2}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.exp3}>
          <h2 className={styles.expp3}>Experience 3</h2>
          <input
            className={styles.exp3in}
            name="experience3"
            placeholder="EXPERIENCE 3"
            maxLength={20}
            value={formData.experience3}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.subton}>
          {/* Use onClick to trigger the form submission */}
          <a href="/profile" className={styles.submit} onClick={handleSubmit}>
            SUBMIT
          </a>
        </div>
      </div>
    </main>
  );
}
