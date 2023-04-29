import {useState} from "react";

const Booking = () => {
    const tags = ['Strategy', 'Design', 'Development', 'Marketing'];
    const [selectedTags,
        setSelectedTags] = useState([]);
    return (
        <div className="bg-white">
            <div className="container py-[120px]">
                <div className="lg:grid grid-cols-3 lg:gap-20">
                    <div className="lg:col-span-2">
                        <p className="uppercase text-[20px] text-secondary-800">Pick what you are interested in</p>
                        <div className="mt-[20px] flex flex-wrap gap-8">
                            {tags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => selectedTags.includes(tag)
                                    ? setSelectedTags(selectedTags.filter(t => t !== tag))
                                    : setSelectedTags([
                                        ...selectedTags,
                                        tag
                                    ])}
                                    className={`px-6 py-2 m-2 text-[17px] font-semibold rounded-full focus:outline-none ${selectedTags.includes(tag)
                                    ? 'bg-black text-white border-2 border-transparent'
                                    : 'bg-white text-black border-2 border-[#f0f0f0]'}`}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <div className="mt-[50px]">
                            <form>
                                <input
                                    className=" text-[20px] w-full border-b-2 border-[#f0f0f0] pb-2 outline-none"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="What’s your name"/>
                                <input
                                    className="mt-[50px] text-[20px] w-full border-b-2 border-[#f0f0f0] pb-2 outline-none"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Type e-mail address"/>
                                <input
                                    className="mt-[50px] text-[20px] w-full border-b-2 border-[#f0f0f0] pb-2 outline-none"
                                    type="text"
                                    name="about"
                                    id="about"
                                    placeholder="What can you tell us about it?"/>
                                <button
                                    className=" w-full lg:w-fit mt-[50px] text-[20px] bg-primary-800 text-white px-[80px] py-[20px]">Send a Request</button>
                            </form>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div>
                            <p className="uppercase text-[16px] text-secondary-800/50">Address</p>
                            <p className="mt-[10px] text-[20px] text-secondary-800">820 Valencia Street, San
                                <br/>
                                Franciisco, CA, 94110</p>
                        </div>
                        <div className="mt-[60px]">
                            <p className="uppercase text-[16px] text-secondary-800/50">Prefer to talk?</p>
                            <p className="mt-[10px] text-[20px] text-secondary-800">+8801 3663 2727</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;