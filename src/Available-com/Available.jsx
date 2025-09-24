import { use } from 'react';
import Player from '../Player/Player';
const Available = ({ playerPromisses }) => {
    const playerResponse = use(playerPromisses)
    console.log(playerResponse)

   
    // console.log(isSelected)


    return (
    
        <div>
            <section className='Card_section mx-auto max-w-7xl grid md:grid-cols-3 grid-cols-1 gap-y-3 '>

                {
                    playerResponse.map((player,index)=><Player player={player} key={player.player_name+index} ></Player>)
                }

                
            </section>
        </div>

        
    );
};

export default Available;