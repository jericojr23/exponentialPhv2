import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
const jwt = Cookies.get('jwt');
const id = 1; //Di ko madynamic kase walang pangagalingan wala pa yung job lists
const JobView = () => {
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Assuming you have an API endpoint to get job details based on the job ID
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${apiUrl}/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setJobDetails(data);
        } else {
          console.error('Failed to fetch job details');
        }
      } catch (error) {
        console.error('Error fetching job details', error);
      }
    };

    fetchJobDetails();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Container className="my-4">
      {/* Logo and Title */}
      <div className="d-flex align-items-center mb-4">
        <Image src="/LOGO1.png" alt="Logo1" width={75} height={75} style={{ marginRight: '1rem' }} />
        <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginTop: '20px' }}>Exponential PH</h1>
      </div>

      {/* Job Details Card */}
      <Card className="p-4 shadow rounded card">
        {/* Top Right Button */}
        <Link href="/">
          <Button variant="outline-secondary" className="position-absolute top-0 end-0 m-3">
            Go Back!
          </Button>
        </Link>

        <div className="d-flex align-items-center mb-4">
          <h3 className="mb-0">Job Details</h3>
        </div>

        {jobDetails && (
          <>
            <Row className="mb-3">
              <Col md={6}>
                <div>
                  <h5 className="fw-bold text-primary">Job Title:</h5>
                  <p className="text-secondary">{jobDetails.title}</p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h5 className="fw-bold text-primary">Employment Type:</h5>
                  <p className="text-secondary">{jobDetails.employmentType}</p>
                </div>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <div>
                  <h5 className="fw-bold text-primary">Experience Level:</h5>
                  <p className="text-secondary">{jobDetails.experienceLevel}</p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h5 className="fw-bold text-primary">Salary:</h5>
                  <p className="text-secondary">{jobDetails.salary}</p>
                </div>
                <div className="ms-auto">
                  <button>Accept Job!</button>
                </div>
              </Col>
            </Row>

            <div>
              <h5 className="fw-bold text-primary">Job Description:</h5>
              <p className="text-secondary">{jobDetails.description}</p>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
};

export default JobView;