import { Link } from "react-router-dom";
import heroWallpaper from "../assets/images/hero-wallpaper.png";

const Home = () => {
  return (
    <div
      className="pagePadding flex h-calc-100dvh-minus-64 w-full flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat sm:h-calc-100vh-minus-64"
      style={{ backgroundImage: `url(${heroWallpaper})` }}
    >
      <div
        id="content"
        className="flex flex-col items-center justify-center gap-4 text-center text-white"
      >
        <h1 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">
          Fuel Your Fitness Journey
        </h1>
        <p className="text-md w-8/12 sm:text-lg md:w-6/12 md:text-xl lg:text-2xl">
          Discover premium protein powders and supplements crafted to power your
          workouts and boost your recovery. Your goals, our mission—let’s
          achieve greatness together!
        </p>
      </div>

      <button className="text-md rounded border-2 border-transparent bg-teal-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-teal-500 hover:bg-white hover:text-teal-500 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
        <Link to="/shoes">Shop Protein Powders</Link>
      </button>
    </div>
  );
};

export default Home;
