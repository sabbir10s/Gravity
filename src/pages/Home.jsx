import { useEffect } from "react";
import FeaturedClients from "../components/screen/Home/FeaturedClients";
import Hero from "../components/screen/Home/Hero";
import OurWork from "../components/screen/Home/OurWork";
import Review from "../components/screen/Home/Review";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gravity - Home</title>
      </Helmet>
      <Hero />
      <OurWork />
      <FeaturedClients />
      <Review />
    </>
  );
};

export default Home;
