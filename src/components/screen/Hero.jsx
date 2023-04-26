import logo from '../../assets/img/video logo.png'
import play from '../../assets/icon/Play.png'
const Hero = () => {
  return <div className="bg-primary-800 text-white py-[52px]">
    <div className="container">
      <h1 className="font-medium text-[40px] lg:text-[80px] lg:leading-[100px]">Ideas transformed into masterpieces</h1>
      <p className="text-[16px] lg:text-[24px] lg:w-4/5 mt-[16px] lg:mt-[24px]">Gravity is a digital agency offering IT and digital branding services. We provide customized solutions to achieve business goals with outstanding results.</p>

      <div className="bg-[#23C162] mt-[32px] lg:mt-[60px] w-full flex items-center justify-center relative">
      <img className=' p-20 lg:p-28 ' src={logo} alt="" />
      <img className=' absolute w-[56px] md:w-[100px] lg:w-[200px] h-[56px] md:h-[100px] lg:h-[200px]' src={play} alt="" />
      </div>
      <div className='lg:flex justify-between items-start mt-[40px] md:mt-[50px] lg:mt-[80px]'>
        <h2 className='text-[20px] md:text-[24px] lg:text-[50px]'>About</h2>
        <p className='mt-[12px] lg:mt-0 lg:w-3/4 text-[16px] md:text-[19px] lg:text-[24px]'>Gravity is a fast growing digital agency that specializes in providing first-rate <span className='text-[#1DFF77]'>IT</span> and <span className='text-[#1DFF77]'>digital branding services</span>. With a team of experienced professionals who are passionate about technology and creativity, Gravity has made a name for itself for providing innovative solutions that help businesses of all sizes grow and succeed in todays digital landscape.</p>
      </div>
    </div>
  </div>;
};

export default Hero;
