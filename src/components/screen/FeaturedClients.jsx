import eximBank from '../../assets/img/exim bank logo.png'
import ai2 from '../../assets/img/a2i.png'
import chew from '../../assets/img/chew.png'
import may from '../../assets/img/may.png'
import bosphorus from '../../assets/img/bosphorus.png'
import tappware from '../../assets/img/tappware.png'
import jobhirehub from '../../assets/img/jobhirehub.png'
import streamlare from '../../assets/img/streamlare.png'
import type from '../../assets/img/Type.png'

const FeaturedClients = () => {
    return (
        <div className="bg-[#fafcfe] relative">
        <img className=' absolute top-0 w-[1400px] hidden md:block' src={type} alt="" />
            <div className="container">
                <h2 className="text-[36px] lg:text-[44px] pb-6 md:py-6 lg:py-12 text-secondary-800 font-semibold">Featured Clients</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-[40px]'>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={eximBank} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={ai2} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img className='w-[250px]' src={chew} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img className='w-[250px]' src={may} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={bosphorus} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={tappware} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={jobhirehub} alt="" />
                    </div>
                    <div className='bg-white rounded-[16px] shadow-custom w-full md:w-[300px] h-[280px] flex items-center justify-center'>
                        <img src={streamlare} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedClients;