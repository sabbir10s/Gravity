import Booking from "../components/screen/Contact/Booking";
import Calender from "../components/screen/Contact/Calender";
import FAQ from "../components/screen/Contact/FAQ";
import EveryHero from "../components/shared/EveryHero";

const Contact = () => {
  return (
    <div>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>Let’s achieve your goals together connect with Gravity 👋</EveryHero>
      </section>
      <Booking />
      <Calender />
      <FAQ />
    </div>
  );
};

export default Contact;
