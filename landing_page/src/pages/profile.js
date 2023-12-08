import Link from "next/link";
import styles from './profile.styles.module.css';
import Image from "next/image"; 
import img from "/public/Poging DP.jpg";
import fb from "/public/fb.png";
import google from "/public/google.png";
import linkedin from "/public/linkedin.png";

export default function Profile() {
  return (
    <main className={styles.maincon}>
      <div className={styles.oblong}>
        <div className={styles.prof}>
          <div className={styles.imgprof}>
            <div className={styles.imgg}>
              <Image src={img} 
              alt="DP" 
              layout="fill"
              objectFit="cover" />
            </div>
            <p className={styles.fullname}>Charles Feria</p>
            <div className={styles.upl}>
              <Link href="/editprof">Edit Profile</Link>
            </div>
          </div>
          <div className={styles.accs}>
            <div className={styles.fb}>
              <div className={styles.fblogo}>
                <Image src={fb} alt="FB" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.fbincon}>
                <p className={styles.fbin}></p>
              </div>
            </div>
            <div className={styles.google}>
              <div className={styles.glogo}>
                <Image src={google} alt="google" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.gincon}>
                <p className={styles.gin}></p>
              </div>
            </div>
            <div className={styles.linked}>
              <div className={styles.linklogo}>
                <Image src={linkedin} alt="linkedin" layout="responsive" objectFit="cover" />
              </div>
              <div className={styles.lincon}>
                <p className={styles.lin}></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.editprof}>
          <h1 className={styles.sup}>PROFILE PAGE</h1>
          <div className={styles.name}>
            <div className={styles.first}>
              <h2 className={styles.fn}>First Name</h2>
              <p className={styles.fnin}></p>
            </div>
            <div className={styles.last}>
              <h2 className={styles.ln}>Last Name</h2>
              <p className={styles.lnin}></p>
            </div>
          </div>
          <div className={styles.datemob}>
            <div className={styles.date}>
              <h3 className={styles.mn}>Mobile Number</h3>
              <p className={styles.mnin}></p>
            </div>
            <div className={styles.mob}>
              <h3 className={styles.bd}>Birth Date</h3>
              <p className={styles.bdin}></p>
            </div>
          </div>
          <h4 className={styles.addr1}>Permanent Address</h4>
          <p className={styles.addr1in}></p>
          <p className={styles.addr1inn}></p>
          <div className={styles.cslog}>
            <h5 className={styles.compslogan}>About You</h5>
            <p className={styles.cslogan}>LOREM IPSUM MAMAMAMAMAMAMMAMAMAMAMAMA</p> 
          </div>
        </div>
        <div className={styles.exp}>
          <h1 className={styles.expp}>EXPERIENCES</h1>
          <div className={styles.exp1}>
            <h2 className={styles.expp1}>Experience 1</h2>
            <p className={styles.exp1in}>Pogi ako</p>
          </div>
          <div className={styles.exp2}>
            <h2 className={styles.expp2}>Experience 2</h2>
            <p className={styles.exp2in}>Pogi ako</p>
          </div>
          <div className={styles.exp3}>
            <h2 className={styles.expp3}>Experience 3</h2>
            <p className={styles.exp3in}>Pogi ako</p>
          </div>
        </div>
      </div>
    </main>
  );
}