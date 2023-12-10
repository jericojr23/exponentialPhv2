import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import logo from '/public/exphlogo.png';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isApplicant, setIsApplicant] = useState(false);

  useEffect(() => {
    const jwt = Cookies.get('jwt');
    const storedIsApplicant = Cookies.get('isApplicant');

    if (jwt) {
      setLoggedIn(true);

      if (storedIsApplicant) {
        setIsApplicant(storedIsApplicant === 'true');
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  // Update navLinks based on login status
  const navLinks = loggedIn
    ? [
        isApplicant
          ? { name: 'Profile', link: '/profile' }
          : { name: 'Create a Task', link: '/create-task' },
        { name: 'Logout', link: '#', onClick: handleLogout },
      ].filter(Boolean) // Remove falsy values (null or undefined)
    : [{ name: 'Login', link: '/login' }];

  function handleLogout() {
    Cookies.remove('jwt');
    Cookies.remove('User ID');
    Cookies.remove('isApplicant');
    window.location.href = '/';
  }

  return (
    <nav style={navbarStyle} className="w-full py-4">
      <div className="flex justify-between items-center mx-auto px-32">
        <div style={containerStyle}>
          {/* Wrap your image with Link */}
          <Link legacyBehavior href="/">
            <a>
              <Image src={logo} alt="Description" width={50} height={50} />
            </a>
          </Link>
          <div style={expPhStyle}>Exponential PH</div>
        </div>
        <ul className="flex gap-6">
          {navLinks.map(({ name, link, onClick }) => (
            <li key={name}>
              {onClick ? (
                <button onClick={onClick}>{name}</button>
              ) : (
                <Link href={link}>{name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#00A3FF',
  color: 'white',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const expPhStyle = {
  fontSize: '1.5rem',
  marginLeft: '0.5rem',
};

export default Navbar;
