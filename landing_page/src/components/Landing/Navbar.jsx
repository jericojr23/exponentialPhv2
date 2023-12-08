import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetcher } from '/lib/api';
import ExponentialPhLogo from '../ExponentialPhLogo';
import Cookies from 'js-cookie';

const Navbar = () => {
  const navLinks = [
    { name: 'About', link: '/about' },
    { name: 'Community', link: '/community' },
  ];

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const Search = async (input) => {
    try {
      const response = await fetch(`${apiUrl}/task/search?keyword=${input}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (jwt) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const navbarStyle = {
    backgroundColor: '#00A3FF',
    color: 'white',
  };

  return (
    <nav style={navbarStyle} className="w-full py-4">
      <div className="flex justify-between items-center mx-auto px-32">
        <Link href="/">
          <ExponentialPhLogo fillColor={'#8EF8FF'} />
        </Link>
        <ul className="flex gap-6">
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
          {!loggedIn && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <button
                onClick={() => {
                  Cookies.remove('jwt');
                  window.location.href = '/';
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Search bar container centered */}
      <div className={`search-bar-container ${showSearchBar ? 'active' : ''}`}>
        <form className="search-bar-form">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
