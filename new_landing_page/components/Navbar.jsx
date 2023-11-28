import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
 const navLinks = [
    { name: 'Login', link: '/login' },
    // { name: '', link: '/community' },
 ];
 const controls = useAnimation();
 const [search, setSearch] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', search);
 };

 return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      animate={controls}
    >
      <div className="absolute w-[60%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
      <button type="submit" className="bg-white text-black px-4 py-2 rounded-md ml-2">
          Search
      </button>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ExponentialPH
        </h2>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link legacyBehavior key={link.name} href={link.link}>
              <a className="text-white font-bold text-[18px] hover:underline">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
 );
};

export default Navbar;