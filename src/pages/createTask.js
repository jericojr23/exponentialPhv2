import Link from "next/link";
import styles from './createTask.styles.module.css';
import Image from "next/image"; 

export default function Profile() {
  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <div className={styles.task}>
          <h1 className={styles.tasks}>CREATE TASK</h1>
          <h2 className={styles.tn}>Task Name</h2>
          <input className={styles.tnin} placeholder="TASK NAME"/>
          <div className={styles.box1}>
            <div className={styles.box1_1}>
              <h3 className={styles.salary}>Salary</h3>
              <input className={styles.salin} placeholder="PROJECT SALARY"/>
            </div>
            <div className={styles.box1_2}>
              <h3 className={styles.explvl}>Experience Level</h3>
              <input className={styles.expin} placeholder="EXPERIENCE LEVEL" maxLength={20}/>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.box2_1}>
              <h3 className={styles.postdate}>Date Posted</h3>
              <input className={styles.pdin} type="date"/>
            </div>
            <div className={styles.box2_2}>
              <h3 className={styles.tasker}>Task Category</h3>
              <input className={styles.taskin} placeholder="TASK CATEGORY" maxLength={20}/>
            </div>
            <div className={styles.box2_3}>
              <h3 className={styles.tasker}>Task Type</h3>
              <input className={styles.taskin} placeholder="TASK TYPE" maxLength={20}/>
            </div>
          </div>
          <div className={styles.box3}>
            <div className={styles.box3_1}>
                <h3 className={styles.salary}>Task Description</h3>
                <textarea className={styles.desc} placeholder="TASK DESCRIPTION" rows={3} />
              </div>
          </div>
        </div>
        <div className={styles.company}>
          <h1 className={styles.comp}>COMPANY</h1>
          <div className={styles.exp1}>
            <h2 className={styles.expp1}>Company Name</h2>
            <input className={styles.exp1in} placeholder="COMPANY NAME" maxLength={20}/>
          </div>
          <div className={styles.exp2}>
            <h2 className={styles.expp2}>Company Address</h2>
            <textarea className={styles.exp2in} placeholder="COMPANY ADDRESS"/>
          </div>
          <div className={styles.exp3}>
            <h2 className={styles.expp3}>Company Website</h2>
            <input className={styles.exp3in} placeholder="COMPANY WEBSITE" maxLength={20}/>
          </div>
          <div className={styles.subton}><button className={styles.submit}>SUBMIT</button></div>
        </div>
      </div>
    </main>
  );
}