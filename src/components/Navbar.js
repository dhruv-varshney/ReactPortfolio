import React, { useState } from 'react';
import resume from '../assets/resume.pdf';
import { RightContainer } from '../styles/Navbar.styles';
import '../styles/navbar.css';
export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        {/* <img src={logo} className="App-logo w-10 rounded-full logo ${showOptions ? 'hidden' : 'block md:hidden'}`}" alt="logo"/> */}
        {/* Hamburger icon */}
        <div className="relative">
          {/* Hamburger icon */}
          <button
            className={`block md:hidden ${showOptions ? 'hidden' : ''}`}
            onClick={handleToggleOptions}
            style={{
              position: 'fixed',
              top: '10px', /* Adjust the value as needed to set the vertical position */
              left: '10px', /* Adjust the value as needed to set the horizontal position */
              fontSize: '40px'
            }}
          >
            ☰
          </button>
          {/* Cross icon */}
          <button
            className={`block md:hidden ${showOptions ? '' : 'hidden'}`}
            onClick={handleToggleOptions}
            style={{
              position: 'fixed',
              top: '10px', /* Adjust the value as needed to set the vertical position */
              left: '10px', /* Adjust the value as needed to set the horizontal position */
              fontSize: '40px'
            }}
          >
            ✕
          </button>
        </div>
        {/* Navigation options */}
        <ul className={`md:flex ${showOptions ? 'block' : 'hidden'}`} style={{ marginleft: "10px", zIndex: "99" }}>
          <li className="p-4">
            <a href="#home" className="hover:underline">About</a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">Skills</a>
          </li>
          <li className="p-4">
            <a href="#honors" className="hover:underline">Honor & Awards</a>
          </li>
          <li className="p-4">
            <a href="#certs" className="hover:underline">Certifications</a>
          </li>
          <li className="p-4">
            <a href="#acad" className="hover:underline">Academics & Work</a>
          </li>
        </ul>
        <RightContainer>
        <a href={resume} rel="noreferrer" target="_blank" className="bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4" style={{
              position: 'fixed',
              top: '20px', /* Adjust the value as needed to set the vertical position */
              right: '10%', /* Adjust the value as needed to set the horizontal position */
            }}>Resume</a>
        </RightContainer>
      </div>
    </div>
  );
}

