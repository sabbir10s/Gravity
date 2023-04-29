import FAQ from "../components/screen/Contact/FAQ";
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
      <section>
        <FAQ />
      </section>
    </div>
  );
};

export default Services;
