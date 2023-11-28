import React from 'react';
import styles from './Profile.module.css';
import Strapi from 'strapi-sdk-javascript';
const Profile = () => {
 return (
    <div className={styles.profileCard}>
      <div className={styles.profileImg}></div>
      <div className={styles.name}>John Doe</div>
      <div className={styles.title}>Software Engineer</div>
      <div className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur sapien urna, vitae efficitur erat mollis non.</div>
    </div>
 );
};

export default Profile;