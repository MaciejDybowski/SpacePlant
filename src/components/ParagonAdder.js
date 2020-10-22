import React, { useState } from 'react'
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useFirestore } from 'react-redux-firebase'

import '../style/ParagonAdder.scss';

const ParagonAdder = ({ user, userID }) => {
    const firestore = useFirestore();
    const [score, setScore] = useState(300)
    const [paragon, setParagon] = useState('');


    const handleSubmit = () => {
        setParagon('');
        if (user.points > score) {
            setScore(score + 300);

            firestore.collection('users').doc(userID).update({
                numberOfPlants: user.numberOfPlants + 1,
            })


        }
        firestore.collection('users').doc(userID).update({
            points: user.points + Math.floor(Math.random() * (100 - 20)) + 20,
        })
    }
    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div className='paragon-box'>
            <p>Zarejestruj paragon</p>
            <div className='field'>
                <ReceiptIcon fontSize='small' />
                <input type='text' placeholder='Wpisz swój kod paragonu...' value={paragon} onChange={(e) => setParagon(e.currentTarget.value)} onKeyDown={(e) => handleEnter(e)} autoFocus></input>
            </div>
            <button onClick={(e) => handleSubmit(e)}>Dodaj paragon</button>
        </div>
    )
}

export default ParagonAdder
