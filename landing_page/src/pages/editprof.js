import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import img from '../../public/Poging DP.jpg';
import fb from '../../public/fb.png';
import google from '../../public/google.png';
import linkedin from '../../public/linkedin.png';
import Cookies from 'js-cookie';
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function EditProf() {
  // Form data
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    MobileNumber: '',
    BirthDate: '',
    Address1: '',
    Address2: '',
    AboutYou: '',
    experience1: '',
    experience2: '',
    experience3: '',
    FaceBook: '',
    Google: '',
    LinkedIn: '',
  });

  // Change form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getTokenFromCookies = () => {
    return Cookies.get('jwt');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Token from cookies
      const jwtToken = getTokenFromCookies();

      // Post ba dapat dito or Put? 
      const response = await axios.post(`${apiUrl}/auth/profiles/1`, formData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      // Successful handle submit
      console.log('Data submitted successfully', response.data);
      alert('Data submitted successfully');
    } catch (error) {
      // Failed handle submit
      console.error('Error submitting data', error);
      alert('Error submitting data. Please try again.');
    }
  };

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
          value={formData.Address1}
            onChange={handleInputChange}/>
          <input 
          className={styles.addr1inn} 
          placeholder="PERMANENT ADDRESS" 
          maxLength={80} 
          value={formData.Address2}
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
