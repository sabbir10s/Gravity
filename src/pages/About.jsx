import { useEffect } from "react";
import AboutSlide from "../components/screen/About/AboutSlide";
import Process from "../components/screen/About/Process";
import Vision from "../components/screen/About/Vision";
import FeaturedClients from "../components/screen/Home/FeaturedClients";
import Review from "../components/screen/Home/Review";
import EveryHero from "../components/shared/EveryHero";
import { Helmet } from "react-helmet";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gravity - About us</title>
      </Helmet>
      <section className="bg-primary-800 text-white pb-2.5 lg:pb-8">
        <EveryHero>We make brands that demand attention! Loud, proud, and impossible to ignore.</EveryHero>
        <AboutSlide />
      </section>
      <section className="overflow-hidden">
        <Vision />
      </section>
      <section className=" py-12 lg:py-36">
        <Process />
      </section>
      <section>
        <FeaturedClients />
        <Review />
      </section>
    </>
  );
};

export default About;
