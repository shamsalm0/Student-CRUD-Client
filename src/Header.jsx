import React from 'react';

const Header = () => {
    return (
        <nav className="bg-blue-300 p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">My Website</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/addStudent" className="text-white">Add Student</a></li>
            <li><a href="/services" className="text-white">Services</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;