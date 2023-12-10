import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const CreateJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    employmentType: 'Full-time',
    experienceLevel: 'Junior',
    salary: '',
    jobDescription: '',
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
    } catch (error) {
      // Handle errors and log the error details
      console.error('Error creating job:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '500px', backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0, 125, 171, 0.15)', borderRadius: '10px' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/LOGO1.png" alt="Logo1" width={75} height={75} style={{ marginRight: '1rem' }} />
            <h1 style={{ fontWeight: 700, fontSize: '1.25rem' }}>Exponential PH</h1>
          </div>
          {/* Add your navigation button or component here */}
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '1rem 1rem', display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Job Title</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />

            <label style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '1.75rem' }}>Employment Type</label>
            <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contractual">Contractual</option>
            </select>

            <label style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '1.75rem' }}>Experience Level</label>
            <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} required>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>

            <label style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '1.75rem' }}>Salary</label>
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} required />

            <label style={{ fontWeight: 700, fontSize: '0.875rem', marginTop: '1.75rem' }}>Job Description</label>
            <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} required></textarea>
          </div>
          <div style={{ padding: '0 1.5rem 1.5rem' }}>
            <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: '0.15s ease', backgroundColor: '#007dab', color: '#FFF', padding: '0.75rem 1.25rem', borderRadius: '0.25rem', fontWeight: 500, fontSize: '0.875rem' }}>Submit Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPage;
