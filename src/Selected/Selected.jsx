import React from 'react';
import Selection from './Selection';

const Selected = ({ buyPlayer ,removeHandler}) => {
    // console.log(buyPlayer)
    return (
        <div>
            <section className='mx-auto max-w-7xl mt-13' >

                {
                    buyPlayer.map(Player => <Selection Player={Player} removeHandler={removeHandler} ></Selection>)
                }
                <button className=' cursor-pointer  outline-5 outline-[#E7FE29] border-6 border-white  bg-[#E7FE29] md:px-4   py-2  font-bold md:text-lg text-base rounded-2xl mt-10' >Add More Player</button>
            </section>

        </div>
    );
};

export default Selected;