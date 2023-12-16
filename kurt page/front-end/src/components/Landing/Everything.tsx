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
  options?: CheckboxOption[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  options = [],
}) => {
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
  const jobItems: string[] = ["Data Science", "Web Design", "Cybersecurity"];

  return (
    <div>
      <main
        className="container-fluid"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="row" style={{ height: "calc(100vh - 90px)" }}>
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
