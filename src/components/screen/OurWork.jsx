const OurWork = () => {
    return (
        <div className="bg-white">
            <div className="container py-[60px]">
                <h2 className=" text-secondary-800 text-[32px] md:text-[36px] lg:text-[44px] font-semibold">What we do?</h2>
                <div>
                    <div className="py-[24px] lg:mt-[48px] lg:border-t border-[#EDF0F2] lg:grid grid-cols-2">
                        <h3 className="text-secondary-800 text-[24px] lg:text-[28px] font-medium">Strategy</h3>
                        <div className="lg:grid grid-cols-2 mt-[12px] lg:text-[20px]">
                            <ul className="list-disc ml-8 text-secondary-800/80">
                                <li>Research & Data</li>
                                <li>Branding & Positioning</li>
                                <li>Business Consulting</li>
                            </ul>
                            <ul className="list-disc ml-8 text-secondary-800/80">
                                <li>Brand Identity</li>
                                <li>Go To Market</li>
                                <li>Innovation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-2">
                        <h3 className="text-secondary-800 text-[24px] lg:text-[28px] font-medium">Design</h3>
                        <div className="lg:grid grid-cols-2 mt-[12px] lg:text-[20px]">
                            <ul className="list-disc ml-8 text-secondary-800/80">
                            <li>User Research & Testing</li>
                            <li>UX Design</li>
                            <li>Interactive Prototype</li>
                            </ul>
                            <ul className="list-disc ml-8 text-secondary-800/80">
                            <li>Video Production</li>
                            <li>Visual Design</li>
                            <li>Motion Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-2">
                        <h3 className="text-secondary-800 text-[24px] lg:text-[28px] font-medium">Development</h3>
                        <div className="lg:grid grid-cols-2 mt-[12px] lg:text-[20px]">
                            <ul className="list-disc ml-8 text-secondary-800/80">
                            <li>Websites</li>
                            <li>Web apps</li>
                            <li>Mobile apps</li>
                            </ul>
                            <ul className="list-disc ml-8 text-secondary-800/80">
                            <li>eCommerce</li>
                            <li>CMS</li>
                            <li>APIs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-[24px] border-t border-[#EDF0F2] lg:grid grid-cols-2">
                        <h3 className="text-secondary-800 text-[24px] lg:text-[28px] font-medium">Marketing</h3>
                        <div className="lg:grid grid-cols-2 mt-[12px] lg:text-[20px]">
                            <ul className="list-disc ml-8 text-secondary-800/80">
                            <li>Brand strategy</li>
                            <li>Copywriting</li>
                            <li>Public relations (Digital PR)</li>
                            </ul>
                            <ul className="list-disc ml-8 text-secondary-800/80">
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