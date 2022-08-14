import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ExpenseCard from './ExpenseCard';
import './Home.css';
import  {expense_cards_data}  from '../../Resources/Constants/constants';

function Home() {

	const NumberOfCards= expense_cards_data.length;
	return (
		<div className='home-wrapper'>
			<Header/>
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			<div className='card-section'>
				{expense_cards_data.map((CardData) => (
					<ExpenseCard 
					key={CardData.card_id} 
					title={CardData.title} 
					totalSpent={CardData.total_price}
					color={CardData.color}
					/>
				))}
				<ExpenseCard 
					key={NumberOfCards+1} 
					title="New Card"
					color="#e3e3e3e6"
				/>
			</div>
		</div>
	)
}

export default Home
