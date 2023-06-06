import serviceImg1 from "../assets/service/service (1).png";
import serviceImg2 from "../assets/service/service (2).png";
import serviceImg3 from "../assets/service/service (3).png";
import serviceImg4 from "../assets/service/service (4).png";

export const serviceData = [
  {
    _id: 1,
    title: "Strategy",
    details_desc:
      "Our Comprehensive Approach to Effective Strategy Solutions for Business Success. At Gravity, we provide customized strategy solutions designed to help businesses succeed in today's dynamic digital landscape. Our expert team takes a comprehensive approach to research, planning, and execution, tailored to your unique business needs.",
    image: `${serviceImg1}`,
    key_services: ["Research & Data", "Branding & Positioning", "Business Consulting", "Brand Identity", "Go To Market", "Innovation"],
    isReverse: true,
  },
  {
    _id: 2,
    title: "Design",
    details_desc:
      "Designing User-Centered Digital Products: From Research to Launch. At Gravity, we offer customized design solutions that transform your ideas into visually stunning and user-friendly digital products. Let us help you create a product that meets your unique needs and exceeds your expectations.",
    image: `${serviceImg2}`,
    key_services: ["User Research & Testing", "UX Design", "Interactive Prototype", "Design Systems", "Visual Design", "Motion Design"],
    isReverse: false,
  },
  {
    _id: 3,
    title: "Development",
    details_desc:
      "Transforming your digital ideas into reality, from development to launch. At Gravity, we provide expert development solutions that turn your ideas into fully functional and scalable digital products",
    image: `${serviceImg3}`,
    key_services: ["Websites", "Web apps", "Mobile apps", "eCommerce", "CMS", "APIs"],
    isReverse: true,
  },
  {
    _id: 4,
    title: "Marketing",
    details_desc:
      "Maximize Your Brand's Potential with Our Marketing Solutions. At Gravity, we offer expert marketing solutions that deliver results. Our data-driven approach ensures that every aspect of your digital presence is optimized to engage your target audience and achieve your business goals. Let us help you take your brand to new heights.",
    image: `${serviceImg4}`,
    key_services: ["Brand strategy", "Copywriting", "Public relations (Digital PR)", "Brand promotion", "Digital marketing", "SEO"],
    isReverse: false,
  },
];
