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

  const [containerWidth, setContainerWidth] = useState('50%'); // Initial width, adjust as needed

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jobs/34`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('Profile Response:', response);

        const userDataResponse = response.data.data;

        if (userDataResponse && userDataResponse.attributes) {
          const jobAttributes = userDataResponse.attributes;

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
          });

          // Dynamically adjust container width based on jobDescription length
          const contentWidth =
            jobAttributes.jobDescription.length > 200 ? '70%' : '50%';
          setContainerWidth(contentWidth);
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
  }, [jwt]);

  let jobTitle = 'Unknown Job Title'; // Define jobTitle with a default value
  let employmentType = 'Unknown Job Title'; // Define jobTitle with a default value
  let experienceLevel = 'Unknown Job Title'; // Define jobTitle with a default value
  let salary = 'Unknown Job Title'; // Define jobTitle with a default value
  let jobDescription = 'Unknown Job Title'; // Define jobTitle with a default value
  let companyName = 'Unknown Job Title'; // Define jobTitle with a default value
  let companyAddress = 'Unknown Job Title'; // Define jobTitle with a default value
  let companyWebsite = 'Unknown Job Title'; // Define jobTitle with a default value

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching job details: {error.message || 'Unknown error'}</div>;
  }

  if (userData) {
    // If userData is available, update jobTitle
    jobTitle = userData.jobTitle;
    employmentType = userData.employmentType;
    experienceLevel=userData.experienceLevel;
    salary = userData.salary;
    jobDescription = userData.jobDescription;
    companyName = userData.companyName;
    companyAddress = userData.companyAddress;
    companyWebsite = userData.companyWebsite;
  }
  return (
    <main className={styles.maincon}>
      <div className={styles.container}>
            {/* Home button */}
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
            {/* <div className={styles.formGroup}>
              <label htmlFor="taskCategory" className={styles.label}>
                Task Category
              </label>
              <p className={styles.fnin}></p>
            </div> */}
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
            {/* Submit button inside the company form */}
            <div className={styles.subton}>
              {/* <button type="submit" className={styles.submit}>
                VIEW
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

