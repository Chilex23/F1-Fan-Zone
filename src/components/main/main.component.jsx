import React from 'react';
import avatar from "../../assets/woman.jpg";
import { IoIosArrowForward } from "react-icons/io";
import TabIcon from '../TabIcon/tabicon.component';
import Stars from '../stars/stars.component';

const Main = () =>  (
        <div className="px-3  mb-4 ">
            <p className="mb-3">In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work</p>

            <figure className="flex mb-3">
                <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full mr-2 ml-8 sm:ml-0" />
                <figcaption className="self-center font-bold text-md text-blue-600">Kimberly R Mosler</figcaption>
            </figure>

            <>
                <Stars>467 total reviews for this teacher</Stars>
                <Stars>5 total reviews for this class</Stars>
                <p className="text-lg font-semibold mt-2">Completed by 21 Learners</p>
            </>

            <div className="flex mt-5">
                <button className="bg-violet-700 text-sm sm:text-base p-1 px-2 flex sm:p-2 md:px-2 rounded-3xl text-white font-medium">See Class Schedule <IoIosArrowForward className="self-center"/> </button>
                <TabIcon icon="heart">
                    Save
                </TabIcon>
                <TabIcon icon="share">
                    Share
                </TabIcon>
            </div>
        </div>
)

export default Main;