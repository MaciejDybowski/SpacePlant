import React from 'react'
import Nav from './Nav'
import '../style/Dashboard.scss';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


import ParagonAdder from '../components/ParagonAdder';
import Plants from './Plants';
import Scorebox from './Scorebox';
import TableScore from './TableScore';
import '../style/TableScore.scss';
import Footer from '../components/Footer';

const Dashboard = () => {

    const user = useSelector(state => state.firebase.profile)
    const userID = useSelector(state => state.firebase.auth.uid)
    const isAuth = useSelector(state => state.firebase.auth)


   

    if (!isAuth.uid) return <Redirect to='/'></Redirect>
    return (
        <div className='dashboard'>
            <Nav />
            <ParagonAdder user={user} userID={userID} />
            <div className='content'>
                <Plants user={user} />
                <Scorebox user={user} />
            </div>
            <TableScore/>
            <Footer />
        </div>
    )
}




export default Dashboard
