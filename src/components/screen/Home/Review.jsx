import jobhirehub from '../../../assets/img/jobhirehub.png'
import '../../../styles/review.css'
const Review = () => {
    return (
        <div className="bg-[#fafcfe]">
            <div className="container py-[72px] lg:py-[130px] relative ">
                <div className="lg:flex gap-10 backgroundImage">
                    <h2
                        className="lg:w-1/3 text-secondary-800 text-[32px] md:text-[36px] lg:text-[44px] font-semibold">What others are saying</h2>
                    <div className="lg:w-1/2 mt-[40px] lg:mt-0">
                        <p className=" text-[16px] lg:text-[24px]">Great, it was awesome working with him. Everything he does is perfect. Works
                            super fast and truly excellent design skills.</p>
                        <div className='flex items-center justify-between mt-[40px]'>
                            <div>
                                <h3 className="font-semibold text-[16px] lg:text-[20px]">Kenley Lamaute,</h3>
                                <p className="text-primary-800 font-medium text-[14px] lg:text-[16px]">CEO of JobHireHub</p>
                            </div>
                            <img className='w-[140px] lg:w-[180px]' src={jobhirehub} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;