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
          <h1 className={styles.heading}>TASK DETAILS</h1>
          <form className={styles.form} onSubmit={handleSubmit} id="createTaskForm">
            <div className={styles.formGroup}>
              <label htmlFor="taskName" className={styles.label}>
                Task Name
              </label>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="projectSalary" className={styles.label}>
                Salary
              </label>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="experienceLevel" className={styles.label}>
                Experience Level
              </label>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskCategory" className={styles.label}>
                Task Category
              </label>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="employmentType" className={styles.label}>
                Employment Type
              </label>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskDescription" className={styles.label}>
                Task Description
              </label>
              <p className={styles.fnin}></p>

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
              <p className={styles.fnin}></p>

            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyAddress" className={styles.label}>
                Company Address
              </label>
                            <p className={styles.fnin}></p>

            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyWebsite" className={styles.label}>
                Company Website
              </label>
              <p className={styles.fnin}></p>
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