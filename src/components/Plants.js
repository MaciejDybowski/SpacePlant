import React from 'react'
import plant from '../images/plant-2.png';
import plantbw from '../images/plant-bw.png';

import '../style/Plants.scss';


const Plants = ({user}) => {
    const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <div className='plants'>
            <div className='hello-text'>
                <p>Zalogowany jako: {user.firstName} {user.lastName}</p>
            </div>
            <div className='plant'>
                {numbers.map((num, i) => {
                    if (user.numberOfPlants >= i + 1) {
                        return <img src={plant} alt='text' />
                    } else {
                        return <img src={plantbw} alt='text' />
                    }
                })}
            </div>
        </div>
    )
}

export default Plants
