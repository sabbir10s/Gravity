const Calender = () => {
    return (
        <div className="bg-[#f0f5fc]">
            <div className="container py-[50px] lg:py-[80px]">
                <h2 className="text-center text-[24px] md:text-[40px] lg:text-[60px] font-bold">Let’s talk about your
                    <br/>
                    brand with a purpose.</h2>
                <p className="text-center text-[16px] md:text-[20px]">Discover the power of purposeful branding
                    with Gravity - book a meeting with us today.</p>

                <div
                    className="mt-[32px] lg:mt-[50px] calendly-inline-widget min-w-[300px] h-[600px] lg:h-[700px]"
                    data-url="https://calendly.com/sabbirahmed1021/30-minute-meeting"></div>

            </div>
        </div>
    );
};

export default Calender;