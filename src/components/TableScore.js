import React, { useState, useEffect } from 'react'

import firebase from 'firebase';
import trophyGold from '../images/trophy-2.png';

const TableScore = () => {

    const ref = firebase.firestore().collection('users').orderBy('points', 'desc').limit(10);

    const [users, setSsers] = useState([])
    useEffect(() => {
        function getUsers() {
            ref.onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setSsers(items);
            });
        }
        getUsers();
    }, [ref])

    console.log(users);

    return (
        <div className='tableScore'>
            <p className='title'>Tabela rywalizacji</p>
            <div className='table'>
                <ul>
                    {users.map((item, i) => <Row data={item} i={i} />)}

                </ul>
            </div>
        </div>
    )
}

const Row = ({ data, i }) => {
    switch (i + 1) {
        case 1:
            return (
                <li className='places'>
                    <img src={trophyGold} alt='1place' />
                    <span>{i + 1}</span>
                    <span>{data.firstName}</span>
                    <span>{data.points} pkt.</span>
                </li>
            )
        case 2:
            return (
                <li className='places'>
                    <img src={trophyGold} alt='1place' />
                    <span>{i + 1}</span>
                    <span>{data.firstName}</span>
                    <span>{data.points} pkt.</span>
                </li>
            )

        case 3:
            return (
                <li className='places'>
                    <img src={trophyGold} alt='1place' />
                    <span>{i + 1}</span>
                    <span>{data.firstName}</span>
                    <span>{data.points} pkt.</span>
                </li>
            )
        default:
            return (
                <li className='normal'>
                    <span>{i + 1}</span>
                    <span>{data.firstName}</span>
                    <span>{data.points} pkt.</span>
                </li>
            )
    }
}

export default TableScore
