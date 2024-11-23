import heroWallpaper from "../assets/images/hero-wallpaper.png";
import HeaderSection from "../sections/HomeSections/HeaderSection";

const Home = () => {
  return (
    <div
      className="pagePadding flex h-calc-100dvh-minus-64 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat sm:h-calc-100vh-minus-64"
      style={{ backgroundImage: `url(${heroWallpaper})` }}
    >
      <HeaderSection />
    </div>
  );
};

export default Home;
