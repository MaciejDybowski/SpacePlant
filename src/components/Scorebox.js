import React from 'react'

import spaceman from '../images/spaceman.png';
import '../style/Scorebox.scss';

const Scorebox = ({user}) => {
    return (
        <div className='imgbox'>
        <div className='score'>
            <span>Twój wynik punktowy: </span>
            <span>{user.points}</span>
        </div>
        <div className='spaceman'>
            <img src={spaceman} alt='spaceman' />
        </div>
    </div>
    )
}

export default Scorebox
