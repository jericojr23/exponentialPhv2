import React, { useState } from 'react';
import { useRouter } from 'next/router';  // Import the useRouter hook
import styles from './createTask.styles.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const CreateTaskPage = () => {
  const router = useRouter();  // Initialize the useRouter hook
  const [formData, setFormData] = useState({
    jobTitle: '',
    employmentType: 'Full-time',
    experienceLevel: 'Junior',
    salary: '',
    jobDescription: '',
    companyName: '',
    companyAddress: '',
    companyWebsite: '',
  });

  const jwt = Cookies.get('jwt');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/jobs`, { data: formData }, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      });

      // Handle the success response as needed
      console.log('Job created successfully:', response.data);
      const jobID = response.data.data.id; // Access 'data' property

      console.log('Job ID:', jobID);

      // Store the jobID in a cookie
      Cookies.set('jobID', jobID);

      // Redirect to /tasks/viewTask
      router.push('/tasks/viewTask');
    } catch (error) {
      // Handle errors and log the error details
      console.error('Error creating job:', error.response?.data?.error || error.message);
      alert(error.message);
    }
  };


  return (
    <main className={styles.maincon}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>CREATE TASK</h1>
          <form className={styles.form} onSubmit={handleSubmit} id="createTaskForm">
            <div className={styles.formGroup}>
              <label htmlFor="taskName" className={styles.label}>
                Task Name
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange} 
                required
                className={styles.input}
                placeholder="Enter Task Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="projectSalary" className={styles.label}>
                Salary
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Project Salary"
                name="salary" 
                value={formData.salary} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="experienceLevel" className={styles.label}>
                Experience Level
              </label>
              <select 
                className={styles.dropdown}
                defaultValue=""
                name="experienceLevel" 
                value={formData.experienceLevel} 
                onChange={handleChange} 
                required
              >
                <option value="" disabled>Select Experience Level</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="taskCategory" className={styles.label}>
                Task Category
              </label>
              <input
                id="taskCategory"
                className={styles.input}
                type="text"
                placeholder="Enter Task Category"
                maxLength={20}
              />
            </div> */}
            <div className={styles.formGroup}>
              <label htmlFor="employmentType" className={styles.label}>
                Employment Type
              </label>
              <select
                className={styles.dropdown}
                defaultValue=""
                name="employmentType" 
                value={formData.employmentType} 
                onChange={handleChange} 
                required
              >
                <option value="" disabled>Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contractual">Contractual</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskDescription" className={styles.label}>
                Task Description
              </label>
              <textarea
                className={styles.textarea}
                placeholder="Enter Task Description"
                rows={3}
                name="jobDescription" 
                value={formData.jobDescription} 
                onChange={handleChange} 
                required
              />
            </div>
          </form>
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.heading}>COMPANY</h1>
          <form className={styles.form} onSubmit={handleSubmit} id="companyForm">
            <div className={styles.formGroup}>
              <label htmlFor="companyName" className={styles.label}>
                Company Name
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Company Name"
                maxLength={20}
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyAddress" className={styles.label}>
                Company Address
              </label>
              <textarea
                className={styles.textarea}
                placeholder="Enter Company Address"
                name="companyAddress" 
                value={formData.companyAddress} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyWebsite" className={styles.label}>
                Company Website
              </label>
              <input
                id="companyWebsite"
                className={styles.input}
                type="text"
                placeholder="Enter Company Website"
                maxLength={20}
                name="companyWebsite" 
                value={formData.companyWebsite} 
                onChange={handleChange} 
                required
              />
            </div>
            {/* Submit button inside the company form */}
            <div className={styles.subton}>
              <button type="submit" className={styles.submit}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export default CreateTaskPage;
