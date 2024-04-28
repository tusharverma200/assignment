import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Carousel from './Carousel'; // Import the Carousel component
import Add from '../assets/add.png';
import Logo from '../assets/pic.png';

function Banner() {
    // Manage the selected tab state
    const [selectedTab, setSelectedTab] = useState('study');

    // Function to handle tab selection
    const handleTabSelection = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="flex bg-white flex-col items-center">
            <p className="my-8 text-blue-900 font-bold text-[30px]">
                Relations and Functions (Mathematics)
            </p>

            {/* Tabs */}
            <div role="tablist" className="tabs w-full flex justify-center">
                {['study', 'quiz', 'test', 'game', 'others'].map((tab) => (
                    <label
                        key={tab}
                        htmlFor={tab}
                        className={`tab flex items-center justify-center px-4 py-2 cursor-pointer ${selectedTab === tab
                            ? 'text-blue-900 border-b-2 border-blue-900'
                            : 'text-black border-transparent'
                            }`}
                        onClick={() => handleTabSelection(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </label>
                ))}
            </div>

            {/* Carousel */}
            <div className="mt-4 w-2/3">
                <Carousel />
            </div>

            <div className="flex justify-between mx-0 w-full my-7 bg-white">
                <img src={Logo} className="h-[90px] w-[150px]" alt="" />
                <div className="flex justify-around mx-9">
                    <img src={Add} className="h-11 w-11 m-auto" alt="" />
                    <strong className="text-blue-900 my-auto text-[22px]">Create Flashcard</strong>
                </div>
            </div>
        </div>
    );
}

export default Banner;
