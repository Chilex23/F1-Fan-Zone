import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

const TabIcon = ({ children, icon }) => {
  return (
    <div className="flex self-center font-bold text-violet-700 hover:cursor-pointer ml-8">
        {
            icon === "heart" ? <AiOutlineHeart className="self-center mr-2 text-2xl" /> : <RiShareForwardLine className="self-center mr-2 text-2xl" />
        }
        { children }
    </div>
  );
}

export default TabIcon;