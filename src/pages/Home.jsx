import { useEffect } from "react";
import FeaturedClients from "../components/screen/Home/FeaturedClients";
import Hero from "../components/screen/Home/Hero";
import OurWork from "../components/screen/Home/OurWork";
import Review from "../components/screen/Home/Review";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <OurWork />
      <FeaturedClients />
      <Review />
    </div>
  );
};

export default Home;
