import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  
import styles from './createTask.styles.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import axios from 'axios';
import Link from 'next/link';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Task() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = Cookies.get('jwt');
  const appliedAt = Cookies.get('appliedAt');
  const [formData, setFormData] = useState({
    jobTitle: '',
    employmentType: '',
    experienceLevel: '',
    salary: '',
    jobDescription: '',
    companyName: '',
    companyAddress: '',
    companyWebsite: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jobs/4?populate=whoApplied`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('Profile Response:', response);

        const userDataResponse = response.data.data; 

        if (userDataResponse && userDataResponse.attributes) {
          const jobAttributes = userDataResponse.attributes;
          console.log('Job ID:', userDataResponse.id);
          setUserData({
            jobTitle: jobAttributes.jobTitle,
            employmentType: jobAttributes.employmentType,
            experienceLevel: jobAttributes.experienceLevel,
            salary: jobAttributes.salary,
            jobDescription: jobAttributes.jobDescription,
            companyName: jobAttributes.companyName,
            companyAddress: jobAttributes.companyAddress,
            companyWebsite: jobAttributes.companyWebsite,
          });

          setFormData({
            ...formData,
            jobTitle: jobAttributes.jobTitle,
            salary: jobAttributes.salary,
            // Add other fields as needed
          });
        } else {
          setUserData(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error.message || 'Unknown error');
        setError(error);
        setLoading(false);
      }
    };

    if (jwt) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [jwt, appliedAt]);

  let jobTitle = 'Unknown Job Title';
  let employmentType = 'Unknown Job Title';
  let experienceLevel = 'Unknown Job Title';
  let salary = 'Unknown Job Title';
  let jobDescription = 'Unknown Job Title';
  let companyName = 'Unknown Job Title';
  let companyAddress = 'Unknown Job Title';
  let companyWebsite = 'Unknown Job Title';

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching job details: {error.message || 'Unknown error'}</div>;
  }

  if (userData) {
    jobTitle = userData.jobTitle;
    employmentType = userData.employmentType;
    experienceLevel = userData.experienceLevel;
    salary = userData.salary;
    jobDescription = userData.jobDescription;
    companyName = userData.companyName;
    companyAddress = userData.companyAddress;
    companyWebsite = userData.companyWebsite;
  }

  function handleApplyClick() {
    if (appliedAt && userData && userData.id === appliedAt) {
      alert("You have already applied for this job.");
    } else {
      window.location.href = "/apply";
    }
  }

  return (
    <main className={styles.maincon}>
      <div className={styles.container}>
        <div className={styles.homeButton}>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>TASK DETAILS</h1>
          <form className={styles.form} id="createTaskForm">
            <div className={styles.formGroup}>
              <label htmlFor="taskName" className={styles.label}>
                Task Name
              </label>
              <p className={styles.fnin}>{jobTitle}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="projectSalary" className={styles.label}>
                Salary
              </label>
              <p className={styles.fnin}>{salary}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="experienceLevel" className={styles.label}>
                Experience Level
              </label>
              <p className={styles.fnin}>{experienceLevel}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="employmentType" className={styles.label}>
                Employment Type
              </label>
              <p className={styles.fnin}>{employmentType}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskDescription" className={styles.label}>
                Task Description
              </label>
              <p className={styles.fnin}>{jobDescription}</p>
            </div>
          </form>
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.heading}>COMPANY</h1>
          <form className={styles.form} id="companyForm">
            <div className={styles.formGroup}>
              <label htmlFor="companyName" className={styles.label}>
                Company Name
              </label>
              <p className={styles.fnin}>{companyName}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyAddress" className={styles.label}>
                Company Address
              </label>
              <p className={styles.fnin}>{companyAddress}</p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyWebsite" className={styles.label}>
                Company Website
              </label>
              <p className={styles.fnin}>{companyWebsite}</p>
            </div>
            <div className={styles.applyButton}>
              {appliedAt && appliedAt === userData.id ? (
                <p>Already Applied</p>
              ) : (
                <button onClick={handleApplyClick}>Apply</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
