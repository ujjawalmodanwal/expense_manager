import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ExpenseCards from './ExpenseCards';
import './Home.css';

function Home() {
  return (
    <div className='home-wrapper'>
        <Header/>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className='card-section'>
            <ExpenseCards color="yellow" />
            <ExpenseCards color="orange" />
			<ExpenseCards color="blue" />
			<ExpenseCards color="green" />
			<ExpenseCards color="red" />
			<ExpenseCards color="green" />
			<ExpenseCards color="blue" />
			<ExpenseCards color="green" />
			<ExpenseCards color="red" />
			<ExpenseCards color="yellow" />
            <ExpenseCards color="orange" />
			
        </div>
    </div>
  )
}

export default Home
