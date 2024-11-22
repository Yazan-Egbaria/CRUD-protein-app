import { Link } from "react-router-dom";
import proteinWallpaper from "../assets/images/proteinWallpaper.jpg";

const Home = () => {
  return (
    <div
      className="pagePadding flex h-dvh w-full items-center justify-center bg-cover bg-center bg-no-repeat sm:h-screen"
      style={{ backgroundImage: `url(${proteinWallpaper})` }}
    >
      <button className="text-md rounded border-2 border-transparent bg-teal-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-teal-500 hover:bg-white hover:text-teal-500 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
        <Link to="/shoes">Shop Protein Powders</Link>
      </button>
    </div>
  );
};

export default Home;
