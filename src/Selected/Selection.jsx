import React from 'react';
import deleted from '../assets/Vector.png'

const Selection = ({Player,removeHandler}) => {

    const removeBtn=()=>{
        removeHandler(Player)
    }
    return (
        <div>
            
               <div className='flex  justify-between items-center border p-3 shadow-lg border-[#ccc]  rounded-2xl my-3' >
                <div className=' flex items-center' >
                    <img  className='w-15 h-15 rounded-2xl' src={Player.player_image} alt="" />
                    <div className='container ml-4' >
                        <h3 className='font-semibold text-2xl'>{Player.player_name}</h3>
                        <p className='text-sm font-medium text-gray-500'>{Player.playing_role}</p>
                    </div>
                    
                </div>
                <div  onClick={removeBtn} className='cursor-pointer' ><img src={deleted} alt=""/></div>
               </div>
              
            
        </div>
    );
};

export default Selection;