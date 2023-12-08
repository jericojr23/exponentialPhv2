import Link from "next/link";
import styles from './editprof.styles.module.css';
import Image from "next/image"; 
import img from "../../public/Poging DP.jpg";

export default function EditProf() {
  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
      {/* Home button */}
      <div className={styles.homeButton}>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </div>
        <div className={styles.prof}>
          <div className={styles.imgprof}>
            <div className={styles.imgg}>
              <Image src={img} 
              alt="DP" 
              layout="fill"
              objectFit="cover" />
            </div >
            <div className={styles.upl}>
              <input className={styles.photo} type="file" accept="image/*" />
            </div>
          </div>
        </div>
        <div className={styles.editprof}>
          <h1 className={styles.sup}>PROFILE PAGE SETTINGS</h1>
          <div className={styles.name}>
            <div className={styles.first}>
              <h2 className={styles.fn}>First Name</h2>
              <input className={styles.fnin} placeholder="FIRST NAME" maxLength={20} />
            </div>
            <div className={styles.last}>
              <h2 className={styles.ln}>Last Name</h2>
              <input className={styles.lnin} placeholder="LAST NAME" maxLength={20}/>
            </div>
          </div>
          <div className={styles.datemob}>
            <div className={styles.date}>
              <h3 className={styles.mn}>Mobile Number</h3>
              <input className={styles.mnin} placeholder="MOBILE NUMBER"  maxLength={15}/>
            </div>
            <div className={styles.mob}>
              <h3 className={styles.bd}>Birth Date</h3>
              <input className={styles.bdin} type="date"/>
            </div>
          </div>
          <h4 className={styles.addr1}>Permanent Address</h4>
          <input className={styles.addr1in} placeholder="PERMANENT ADDRESS" maxLength={80}/>
          <input className={styles.addr1inn} placeholder="PERMANENT ADDRESS" maxLength={80}/>
          <div className={styles.cslog}>
            <h5 className={styles.compslogan}>About You</h5>
            <textarea rows={3} cols={80} className={styles.cslogan} placeholder='SHORT DESCRIPTION ABOUT YOU'></textarea> 
          </div>
        </div>
        <div className={styles.exp}>
          <h1 className={styles.expp}>EXPERIENCES</h1>
          <div className={styles.exp1}>
            <h2 className={styles.expp1}>Experience 1</h2>
            <input className={styles.exp1in} placeholder="EXPERIENCE 1" maxLength={20}/>
          </div>
          <div className={styles.subton}><a href="/profile" className={styles.submit}>SUBMIT</a></div>
        </div>
      </div>
    </main>
  );
}
