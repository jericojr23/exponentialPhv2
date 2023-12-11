import React from "react";
import styles from "./createTask.styles.module.css";
import Image from "next/image";

export default function CreateTask() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
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
                id="taskName"
                className={styles.input}
                type="text"
                placeholder="Enter Task Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="projectSalary" className={styles.label}>
                Salary
              </label>
              <input
                id="projectSalary"
                className={styles.input}
                type="text"
                placeholder="Enter Project Salary"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="experienceLevel" className={styles.label}>
                Experience Level
              </label>
              <select
                id="experienceLevel"
                className={styles.dropdown}
                defaultValue=""
              >
                <option value="" disabled>Select Experience Level</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className={styles.formGroup}>
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
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="employmentType" className={styles.label}>
                Employment Type
              </label>
              <select
                id="employmentType"
                className={styles.dropdown}
                defaultValue=""
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
                id="taskDescription"
                className={styles.textarea}
                placeholder="Enter Task Description"
                rows={3}
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
                id="companyName"
                className={styles.input}
                type="text"
                placeholder="Enter Company Name"
                maxLength={20}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyAddress" className={styles.label}>
                Company Address
              </label>
              <textarea
                id="companyAddress"
                className={styles.textarea}
                placeholder="Enter Company Address"
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