import React from 'react';
import ApplicantCard from '../cards/ApplicantCard';

const ApplicantsLists = ({ applicant }) => {
  return (
    <div>
      {applicant.map((applicant) => (
        <ApplicantCard applicant={applicant} key={applicant.id} />
      ))}
    </div>
  );
};

export default ApplicantsLists;