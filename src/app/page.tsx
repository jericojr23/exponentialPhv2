import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '500px', backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0, 125, 171, 0.15)', borderRadius: '10px' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/LOGO1.png" alt="Logo1" width={75} height={75} style={{ marginRight: '1rem' }} />
            <h1 style={{ fontWeight: 700, fontSize: '1.25rem' }}>Exponential PH</h1>
          </div>
          <button style={{ display: 'inline-flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', width: '2.5rem', height: '2.5rem', borderRadius: '0.25rem' }}>
            <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </button>
        </div>
        <div style={{ padding: '1rem 1rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginTop: '1.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.75rem', width: '100%' }}>
              <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Job Title</label>
              <input type="text" name="jobTitle" style={{ display: 'block', marginTop: '0.5rem', border: '1px solid #DDD', borderRadius: '0.25rem', padding: '0.75rem 0.75rem', transition: '0.15s ease', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.75rem', width: '100%' }}>
              <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Employment Type</label>
              <select name="employmentType" style={{ display: 'block', marginTop: '0.5rem', border: '1px solid #DDD', borderRadius: '0.25rem', padding: '0.75rem 0.75rem', transition: '0.15s ease', width: '100%' }}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contractual">Contractual</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '1.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.75rem', width: '100%' }}>
              <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Experience Level</label>
              <select name="experienceLevel" style={{ display: 'block', marginTop: '0.5rem', border: '1px solid #DDD', borderRadius: '0.25rem', padding: '0.75rem 0.75rem', transition: '0.15s ease', width: '100%' }}>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '1.75rem', width: '100%' }}>
              <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Salary</label>
              <input type="text" name="salary" style={{ display: 'block', marginTop: '0.5rem', border: '1px solid #DDD', borderRadius: '0.25rem', padding: '0.75rem 0.75rem', transition: '0.15s ease', width: '100%' }} />
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '1.75rem', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Job Description</label>
              <textarea name="jobDescription" style={{ display: 'block', marginTop: '0.5rem', minHeight: '100px', border: '1px solid #DDD', borderRadius: '0.25rem', padding: '0.75rem', transition: '0.15s ease', width: '100%' }}></textarea>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 1.5rem 1.5rem' }}>
          <button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: '0.15s ease', backgroundColor: '#007dab', color: '#FFF', padding: '0.75rem 1.25rem', borderRadius: '0.25rem', fontWeight: 500, fontSize: '0.875rem' }}>Submit Job</button>
        </div>
      </div>
    </div>
  );
};

export default App;
