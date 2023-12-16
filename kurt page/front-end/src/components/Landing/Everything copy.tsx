// app.tsx
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

interface CheckboxOption {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options }) => {
  return (
    <div className="p-4">
      <h2 className="label1 ml-2 mb-3">{title}</h2>
      <div>
        {options.map((option) => (
          <div key={option.id} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={option.id}
              id={option.id}
            />
            <label className="form-check-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobItem: React.FC<{ title: string }> = ({ title }) => {
  const encodedTitle = encodeURIComponent(title).replace(/%20/g, "");

  return (
    <div className="cookieCard p-3 m-2">
      <div></div>
      <p className="cookieHeading">{title}</p>
      <p className="cookieDescription">
        Job description{" "}
        <Link legacyBehavior href={`/jobs/${encodeURIComponent(title)}`}>
          <a>Find out</a>
        </Link>
      </p>
      {/* Move the Link component to wrap the entire button */}
      <Link legacyBehavior href={`/taskList/${encodedTitle}`}>
        <a className="acceptButton">Find out</a>
      </Link>
    </div>
  );
};
const App: React.FC = function MyApp() {
  const employmentOptions: CheckboxOption[] = [
    // { id: "01", label: "Full-time" },
    // { id: "02", label: "Part-time" },
    // { id: "03", label: "Internship" },
    // { id: "04", label: "Contractual" },
  ];

  const experienceOptions: CheckboxOption[] = [
    // { id: "05", label: "Junior" },
    // { id: "06", label: "Senior" },
    // { id: "07", label: "Expert" },
  ];

  const salaryOptions: CheckboxOption[] = [
    // { id: "08", label: "P500 - P1,000" },
    // { id: "09", label: "P1,001 - P5,000" },
    // { id: "10", label: "P5,001 - P10,000" },
    // { id: "11", label: "P10,001 - P20,000" },
    // { id: "12", label: "P20,001 - P50,000" },
    // { id: "13", label: "> P50,000" },
  ];

  const jobItems: string[] = [
    "Data Science",
    "Web Design",
    "Cybersecurity",
    // 'Networking',
    // 'IoT',
    // 'IT Support',
    // 'Hardware',
    // 'IT Staff',
    // 'Software Engineer',
    // 'Graphic Designer',
    // 'UX/UI Designer',
    // 'Database Administrator',
    // 'Network Engineer',
    // 'Front-end Developer',
    // 'Back-end Developer',
    // 'Mobile App Developer',
    // 'Cloud Architect',
    // 'DevOps Engineer',
    // 'Quality Assurance Analyst',
    // 'System Administrator',
    // 'Business Analyst',
    // 'Project Manager',
    // 'Technical Writer',
    // 'Digital Marketing Specialist',
    // 'Customer Support Specialist',
    // 'Sales Representative',
    // 'Financial Analyst',
    // 'Human Resources Coordinator',
    // 'Operations Manager',
    // 'Content Creator',
  ];

  return (
    <div>
      <main
        className="container-fluid"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        {/* <div className="header mb-4">
          <div className="d-flex align-items-center">
            <Image
              src="/LOGO1.png"
              alt="Exponential PH Logo"
              width={75}
              height={75}
            />
            <h1 className="hello-text mt-4">Exponential PH</h1>
          </div>
        </div> */}

        <div className="row" style={{ height: "calc(100vh - 90px)" }}>
          <div className="col-md-4 border-end border-danger">
            <div className="d-flex flex-column">
              <CheckboxGroup
                title="Employment Type"
                options={employmentOptions}
              />
              {/* <CheckboxGroup
                title="Experience Level"
                options={experienceOptions}
              /> */}
              <CheckboxGroup
                title="Salary/Payment Range"
                options={salaryOptions}
              />
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="overflow-auto"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            >
              <div className="row row-cols-5 g-4">
                {jobItems.map((item) => (
                  <div key={item} className="col">
                    <JobItem title={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
