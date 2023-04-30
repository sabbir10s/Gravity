/* eslint-disable react/prop-types */
import {AiOutlineClose} from "react-icons/ai";
import video from '../../assets/video/Final.mp4'
const VideoModal = ({visible, handleCloseVideoModal}) => {

    const handleCloseModal = (e) => {
        if (e.target.id === "container") 
            handleCloseVideoModal();
        };
    
    if (!visible) {
        return null;
    }
    return (
        <div
            id="container"
            onClick={handleCloseModal}
            className="z-50 fixed inset-0 bg-opacity-30 backdrop-blur-sm  ">
            <div className="w-full h-screen bg-secondary-800 flex items-center justify-center duration-700 transition-all">
                <div className="w-[1000px]">
                    <video className="p-10" autoPlay loop controls>
                        <source src={video} type="video/mp4"></source>

                    </video>
                    <button
                        onClick={handleCloseVideoModal}
                        className='bg-white h-10 lg:w-14 w-10 lg:h-14 rounded-full flex justify-center items-center fixed right-5 top-5 z-50'>
                        <AiOutlineClose className='text-xl text-black'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
