import AboutSlide from "../components/screen/About/AboutSlide";
import Process from "../components/screen/About/Process";
import Vision from "../components/screen/About/Vision";
import FeaturedClients from "../components/screen/FeaturedClients";
import Review from "../components/screen/Review";
import EveryHero from "../components/shared/EveryHero";

const About = () => {
  return (
    <div>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>We make brands that demand attention! Loud, proud, and impossible to ignore.</EveryHero>
        <AboutSlide />
      </section>
      <section className="overflow-hidden">
        <Vision />
      </section>
      <section className="py-36">
        <Process />
      </section>
      <section>
        <FeaturedClients />
        <Review />
      </section>
    </div>
  );
};

export default About;
