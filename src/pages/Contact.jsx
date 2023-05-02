import { useEffect } from "react";
import Booking from "../components/screen/Contact/Booking";
import Calender from "../components/screen/Contact/Calender";
import FAQ from "../components/screen/Contact/FAQ";
import EveryHero from "../components/shared/EveryHero";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gravity - Contact us</title>
      </Helmet>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>Let’s achieve your goals together connect with Gravity 👋</EveryHero>
      </section>
      <Booking />
      <Calender />
      <FAQ />
    </>
  );
};

export default Contact;
