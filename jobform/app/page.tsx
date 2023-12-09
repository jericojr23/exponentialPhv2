import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const JobView = () => {
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
        <Button variant="outline-secondary" className="position-absolute top-0 end-0 m-3">
          Go Back!
        </Button>

        <div className="d-flex align-items-center mb-4">
          <h3 className="mb-0">Job Details</h3>
        </div>

        <Row className="mb-3">
          <Col md={6}>
            <div>
              <h5 className="fw-bold text-primary">Job Title:</h5>
              <p className="text-secondary">Software Engineer</p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h5 className="fw-bold text-primary">Employment Type:</h5>
              <p className="text-secondary">Full-time</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <div>
              <h5 className="fw-bold text-primary">Experience Level:</h5>
              <p className="text-secondary">Senior</p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h5 className="fw-bold text-primary">Salary:</h5>
              <p className="text-secondary">P50,000 - P100,000</p>
            </div>
            <div className="ms-auto">
              <button>Accept Job!</button>
            </div>
          </Col>
        </Row>

        <div>
          <h5 className="fw-bold text-primary">Job Description:</h5>
          <p className="text-secondary">Your job description goes here...</p>
        </div>
      </Card>
    </Container>
  );
};

export default JobView;
