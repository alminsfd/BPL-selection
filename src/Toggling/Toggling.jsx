import React from 'react';

const Toggling = ({TogglingBtn1, TogglingBtn2,toggling}) => {
    return (
        <div>
           <section className='Toggling_section mx-auto max-w-7xl mt-10'>
            <div className='flex justify-between items-center' >
                <h2 className='font-bold text-3xl'>Available Players</h2>
                <div>
                    <button onClick={TogglingBtn1} className={` border border-gray-400 rounded-l-xl  px-4 py-2  ${toggling===true?'bg-[#E7FE29] font-black':''} cursor-pointer border-r-0`} >Available</button>
                    <button  onClick={ TogglingBtn2} className={`border border-gray-400 rounded-r-xl  px-4 py-2  ${toggling===false?'bg-[#E7FE29] font-black':''} cursor-pointer border-l-0`} >Selected(0)</button>
                </div>
            </div>
            </section> 
        </div>
    );
};

export default Toggling;