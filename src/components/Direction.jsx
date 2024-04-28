import React from 'react';
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

function Direction() {
    return (
        <div className="flex justify-start ml-8 my-8 text-black">
            <div className="flex items-center space-x-2">
                {/* Make the Home icon larger */}
                <GoHome className="text-2xl" />
                <IoIosArrowForward />
                <p>Flashcard</p>
                <IoIosArrowForward />
                <p>Mathematics</p>
                <IoIosArrowForward />
                <strong>  <p className='text-blue-900' >Relation and Function</p></strong>

            </div>
        </div>
    );
}

export default Direction;
