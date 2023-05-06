import "../../../styles/OurWork.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[#fafcfe]">
      <div className="container pt-[60px] lg:pt-[144px] pb-[60px] lg:pb-[120px]">
        <h2 data-aos="fade-up" className=" text-secondary-800 text-[36px] lg:text-[64px] font-semibold pb-[24px] lg:pb-[48px]">
          What we do?
        </h2>
        <div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="py-[24px] lg:border-t border-[#EDF0F2] lg:grid grid-cols-3">
            <h3 className="text-secondary-800 text-[24px] lg:text-[32px] font-medium col-span-1">Strategy</h3>
            <div className="lg:grid grid-cols-2 mt-[12px] text-[20px] lg:text-[24px] col-span-2">
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Research & Data</li>
                <li>Branding & Positioning</li>
                <li>Business Consulting</li>
              </ul>
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Brand Identity</li>
                <li>Go To Market</li>
                <li>Innovation</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="py-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-3">
            <h3 className="text-secondary-800 text-[24px] lg:text-[32px] font-medium col-span-1">Design</h3>
            <div className="lg:grid grid-cols-2 mt-[12px] text-[20px] lg:text-[24px] col-span-2">
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>User Research & Testing</li>
                <li>UX Design</li>
                <li>Interactive Prototype</li>
              </ul>
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Video Production</li>
                <li>Visual Design</li>
                <li>Motion Design</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="py-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-3">
            <h3 className="text-secondary-800 text-[24px] lg:text-[32px] font-medium col-span-1">Development</h3>
            <div className="lg:grid grid-cols-2 mt-[12px] text-[20px] lg:text-[24px] col-span-2">
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Websites</li>
                <li>Web apps</li>
                <li>Mobile apps</li>
              </ul>
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>eCommerce</li>
                <li>CMS</li>
                <li>APIs</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="pt-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-3">
            <h3 className="text-secondary-800 text-[24px] lg:text-[32px] font-medium col-span-1">Marketing</h3>
            <div className="lg:grid grid-cols-2 mt-[12px] text-[20px] lg:text-[24px] col-span-2">
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Brand strategy</li>
                <li>Copywriting</li>
                <li>Public relations (Digital PR)</li>
              </ul>
              <ul className="disk ml-4 lg:ml-8 text-secondary-800/80">
                <li>Digital marketing</li>
                <li>Brand promotion</li>
                <li>SEO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
