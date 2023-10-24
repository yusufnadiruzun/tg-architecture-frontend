import React, { useState } from 'react';


function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-50 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-10 w-10" /> */}
        <p>TG ARCHITECT</p>
      </div>
      <ul className="hidden md:flex space-x-6 ">
        <li>
          <a href="/hakkimizda" className="text-black font-serif  hover:text-yellow-300">Hakkımızda</a>
        </li>
        <li>
          <a href="/projeler" className="text-black font-serif hover:text-yellow-300">Projeler</a>
        </li>
        <li>
          <a href="/iletisim" className="text-black font-serif hover:text-yellow-300">İletişim</a>
        </li>
      </ul>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-black hover:text-yellow-300"
        >
          <text>buton</text>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute z-10 right-0 top-16 bg-red-100 w-48 h-screen p-4">
          <ul className="space-y-2">
            <li>
              <a href="/hakkimizda" className="text-black">Hakkımızda</a>
            </li>
            <li>
              <a href="/projeler" className="text-black">Projeler</a>
            </li>
            <li>
              <a href="/iletisim" className="text-black">İletişim</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}



export default Navbar;


/*import React from "react";

function Navbar() {
  return (
    
<div>
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="Logo" className="h-10 w-10" /> }
        <p className="text-3xl font-semibold text-purple-900"> TG Architecture </p>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/hakkimizda" className= " font-serif text-black hover:text-yellow-300">Hakkımızda</a>
        </li>
        <li>
          <a href="/projeler" className="font-serif text-black hover:text-yellow-300">Projeler</a>
        </li>
        <li>
          <a href="/iletisim" className="font-serif text-black hover:text-yellow-300">İletişim</a>
        </li>
      </ul>
    </nav>


   </div>
  );
}
export default Navbar;
*/