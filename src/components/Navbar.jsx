import React from 'react';
import Logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <nav className="p-4 bg-white  ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <img src={Logo} alt="Logo" className="h-8 mr-4" />
                </div>
                {/* Navigation Links */}
                <div className="flex text-black space-x-12">
                    <a href="/" className="text-black  px-5 py-2 hover:text-gray-300">Home</a>
                    <a href="/about" className="text-black  px-5 py-2 hover:text-gray-300">Flashcard</a>
                    <a href="/contact" className="text-black  px-5 py-2 hover:text-gray-300">Contact</a>
                    <a href="/faq" className="text-black  px-5 py-2 hover:text-gray-300">FAQs</a>
                    <a href="/login" className="text-white text-sm  bg-blue-900  rounded-3xl hover:bg-blue-600 px-5 py-2 ">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
