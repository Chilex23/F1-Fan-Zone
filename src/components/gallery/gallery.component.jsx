import vanGogh from "../../assets/van-gogh.jpg";
import monet from "../../assets/monet2.jpg";
import matisse from "../../assets/index.jpg";

const Gallery = () => (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 h-96 pr-4">
             <img src={vanGogh} alt="vanGoght" className="row-span-full w-full h-full"/>
             <img src={monet} alt="monet" className="w-full h-full" />
             <img src={matisse} alt="matisse" className="w-full h-full" />
        </div>
)


export default Gallery;