import Service from "../components/screen/services/Service";
import EveryHero from "../components/shared/EveryHero";

const Services = () => {
  return (
    <div>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>We focus on what we do best providing top-class IT and digital branding services.</EveryHero>
      </section>
      <section>
        <Service />
      </section>
      <section>FaQ</section>
    </div>
  );
};

export default Services;
