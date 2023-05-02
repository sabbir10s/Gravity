import play from "../../../assets/icon/Play.png";
import video from "../../../assets/video/Final.mp4";

const Video = () => {
    return (
        <div>
            <div
                className="container mt-[32px] lg:mt-[60px] w-full flex items-center justify-center relative z-0 duration-500">
                <button className="absolute z-10">
                    <img
                        className=" cursor-pointer w-[56px] md:w-[100px] h-[56px] md:h-[100px] "
                        src={play}
                        alt=""/>
                </button>
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
};

export default Video;