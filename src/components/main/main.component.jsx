import React from 'react';
import avatar from "../../assets/woman.jpg";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import TabIcon from '../TabIcon/tabicon.component';

const Main = () => {
    const fiveStars = []
    for (let i = 0; i < 5; i++) {
        fiveStars.push(<AiFillStar className="text-yellow-400 text-xl self-center" />)
    }

    return (
        <div className="px-3">
            <p className="mb-3">In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work</p>

            <figure className="flex mb-3">
                <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full mr-2" />
                <figcaption className="self-center font-bold text-md text-blue-600">Kimberly R Mosler</figcaption>
            </figure>

            <>
                <div className="flex">
                    {
                        fiveStars.map(el => el)
                    }
                    <span className="ml-3 text-gray-500">467 total reviews for this teacher</span>  
                </div>
                <div className="flex">
                    {
                        fiveStars.map(el => el)
                    }
                    <span className="ml-3 text-gray-500">5 total reviews for this class</span>  
                </div>
                <p className="text-lg font-semibold mt-2">Completed by 21 Learners</p>
            </>

            <div className="flex mt-5">
                <button className="bg-violet-700 flex p-2 px-6 rounded-3xl text-white font-medium">See Class Schedule <IoIosArrowForward className="self-center"/> </button>
                <TabIcon icon="heart">
                    Save
                </TabIcon>
                <TabIcon icon="share">
                    Share
                </TabIcon>
            </div>
        </div>
    )
}

export default Main;