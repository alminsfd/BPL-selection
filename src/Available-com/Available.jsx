import { use } from 'react';
import user from '../assets/user1.png'
import flag from '../assets/report1.png'
const Available = ({ playerPromisses }) => {
    const playerResponse = use(playerPromisses)
    console.log(playerResponse)


    return (
        <div>
            <section className='Card_section mx-auto max-w-7xl grid md:grid-cols-3 grid-cols-1 gap-y-3 '>

                {
                    playerResponse.map(player=><div className='w-full mt-8  ' >
                    <div className="card bg-base-100 md:w-100 w-auto  shadow-lg border border-[#ddd]  ">
                        <figure>
                            <img
                            className='w-full h-80  object-cover'
                                src={player.player_image}
                                alt="Shoes" />
                        </figure>
                        <div className="my-3 ">
                            <div className='flex items-center ml-3' >
                                <img className='mr-3' src={user} alt="" />
                                <h2 className="card-title">{player.player_name}</h2>
                            </div>
                            <div className='flex justify-between items-center pb-4 mt-5 mb-5 border-b-gray-400 border-b'>
                                <div className='flex ml-4  ' >
                                <img className='mr-2' src={flag} alt="" />
                                <p>{player.player_country}</p>
                            </div>
                            <button className="btn text-base mr-2">{player.playing_role}</button>
                            </div>

                            <div className='flex justify-between mx-2 my-3 items-center' >
                                <span className='font-bold text-xl' >Rating</span>
                                <span className='font-bold text-xl' >{ player.rating }</span>
                            </div>
                            <div className='flex justify-between mx-2 items-center my-3' >
                                <span className='font-bold text-xl' >{player.bating_style}</span>
                                <span className='text-xl' >{player.bowling_style}</span>
                            </div>

                            <div className="flex justify-between mx-2 items-center my-3">
                                <span className='font-bold text-lg' >Price:${player.price }</span>
                                <button className="btn text-base ">Choose Player</button>
                            </div>
                        </div>
                    </div>
                </div>)
                }

                
            </section>
        </div>
    );
};

export default Available;