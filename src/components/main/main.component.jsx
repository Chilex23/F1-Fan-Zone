import React from 'react';
import avatar from "../../assets/woman.jpg";
import { AiFillStar } from "react-icons/ai";

const Main = () => {
    const fiveStars = []
    for (let i = 0; i < 5; i++) {
        fiveStars.push(<AiFillStar className="text-yellow-400 self-center" />)
    }

    return (
        <div className="p-3">
            <p className="mb-3">In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work</p>

            <figure className="flex mb-3">
                <img src={avatar} alt="Trulli" className="w-20 h-20 rounded-full mr-2" />
                <figcaption className="self-center font-bold text-md text-blue-600">Kimberly R Mosler</figcaption>
            </figure>

            <div>
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
            </div>
        </div>
    )
}

export default Main;