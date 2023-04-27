import eximBank from '../../assets/img/exim bank logo.png'
import ai2 from '../../assets/img/a2i.png'
import chew from '../../assets/img/chew.png'
import may from '../../assets/img/may.png'
import bosphorus from '../../assets/img/bosphorus.png'
import tappware from '../../assets/img/tappware.png'
import jobhirehub from '../../assets/img/jobhirehub.png'
import streamlare from '../../assets/img/streamlare.png'
import '../../styles/FeaturedClients.css'

const FeaturedClients = () => {
    return (
        <div className="bg-[#fafcfe]">
            <div className=" ">
                <div className='background'>
                    <h2
                        className=" container text-[36px] lg:text-[64px] pb-6 md:py-6 lg:py-12 text-secondary-800 font-semibold">Featured Clients</h2>
                </div>
                <div
                    className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-[40px]'>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={eximBank} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={ai2} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img className='w-[250px]' src={chew} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img className='w-[250px]' src={may} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={bosphorus} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={tappware} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={jobhirehub} alt=""/>
                    </div>
                    <div
                        className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={streamlare} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedClients;