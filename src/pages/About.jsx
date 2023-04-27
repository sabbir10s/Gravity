import AboutSlide from "../components/screen/About/AboutSlide";
import Vision from "../components/screen/About/Vision";
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
    </div>
  );
};

export default About;
