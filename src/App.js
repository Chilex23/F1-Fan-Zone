import './App.css';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Main from './components/main/main.component';
import Gallery from './components/gallery/gallery.component';

function App() {
  return (
    <div className="h-screen">
      <header className="mb-5 sm:mb-10 pl-3">
        <h1 className="text-2xl sm:text-3xl font-bold">Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matise & More</h1>
        <div className="text-gray-500 flex content-center">
          <p className="mr-1">Multi Day Course</p>
          <AiOutlineQuestionCircle className="self-center" />
        </div>
      </header>
      <div className="sm:grid grid-cols-2 gap-x-2">
        <Main />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
