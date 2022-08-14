import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ExpenseCard from './ExpenseCard';
import './Home.css';

function Home() {
  return (
    <div className='home-wrapper'>
        <Header/>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className='card-section'>
            <ExpenseCard color="yellow" />
            <ExpenseCard color="orange" />
        </div>
    </div>
  )
}

export default Home
