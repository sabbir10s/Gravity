import FAQ from "../components/screen/Contact/FAQ";
import Service from "../components/screen/services/Service";
import EveryHero from "../components/shared/EveryHero";

const Services = () => {
  return (
    <div>
      <section className="bg-primary-800 text-white pb-5">
        <EveryHero>We focus on what we do best providing top-class IT and digital branding services.</EveryHero>
        <p className="container md:hidden">
          <small>
            {" "}
            A digital agency is a business that provides services related to digital marketing, web design, web development, and other digital
            services. A digital agency is usually staffed with a team of experts in various areas of digital marketing and technology, such as SEO,
            social media marketing, web design and development, content marketing, and more.
          </small>
        </p>
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
