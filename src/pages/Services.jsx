import { useEffect } from "react";
import FAQ from "../components/screen/Contact/FAQ";
import Service from "../components/screen/services/Service";
import EveryHero from "../components/shared/EveryHero";
import { Helmet } from "react-helmet";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gravity - Services</title>
      </Helmet>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>We focus on what we do best providing top-class IT and digital branding services.</EveryHero>
      </section>
      <section>
        <Service />
      </section>
      <section>
        <FAQ />
      </section>
    </>
  );
};

export default Services;
