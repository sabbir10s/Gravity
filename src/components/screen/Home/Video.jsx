import { useState } from "react";
import play from "../../../assets/icon/Play.png";
import video from "../../../assets/video/Final.mp4";
import VideoModal from "../../shared/VideoModal";

const Video = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openModal = () => {
    setShowVideoModal(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseVideoModal = () => {
    document.body.classList.remove("modal-open");
    setShowVideoModal(false);
  };

  return (
    <div>
      <div className={`group container flex items-center justify-center relative z-0 duration-500`}>
        <button onClick={openModal} className="absolute z-10 hidden group-hover:block">
          <img className=" cursor-pointer w-[56px] md:w-[120px] h-[56px] md:h-[120px] " src={play} alt="" />
        </button>
        <video autoPlay muted loop controlsList="nodownload">
          <source src={video} type="video/mp4"></source>
        </video>
      </div>

      <VideoModal handleCloseVideoModal={handleCloseVideoModal} visible={showVideoModal} />
    </div>
  );
};

export default Video;

// vimeo video link: https://vimeo.com/824323840
