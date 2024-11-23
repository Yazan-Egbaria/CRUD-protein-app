import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <div
      id="content"
      className="flex flex-col items-center justify-center gap-8 text-center text-white"
    >
      <div
        id="headers"
        className="flex flex-col items-center justify-center gap-4"
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

      <button className="rounded border-2 border-transparent bg-teal-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-teal-500 hover:bg-white hover:text-teal-500 md:text-lg lg:text-xl xl:text-2xl">
        <Link to="/proteins">Shop Protein Powders</Link>
      </button>
    </div>
  );
};

export default HeaderSection;
