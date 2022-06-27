import { AiFillStar } from "react-icons/ai";

const Stars = ({ children }) => {
    const fiveStars = []
    for (let i = 0; i < 5; i++) {
        fiveStars.push(<AiFillStar key={i} className="text-yellow-400 text-xl self-center" />)
    }

    return (
        <div className="flex">
            {
                fiveStars.map(el => el)
            }
            <span className="ml-3 text-gray-500 text-sm sm:text-base">{ children }</span>  
        </div>
    );
}

export default Stars;