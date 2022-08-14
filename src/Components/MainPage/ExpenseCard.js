import React, {useState} from 'react';
import './ExpenseCard.css';
import Modals from './ExpenseCardModal';
import Modal from "@mui/material/Modal";





function ExpenseCard(props) {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickOnModal = () => {
		console.log(`${isOpen}`);
		setIsOpen(!isOpen);
	};
  	return (
		<div className='expensecard-wrapper'>
			<div className='expensecard' 
				style={{backgroundColor:`${props.color}`, 
				left:`${props.left}`, 
				top:`${props.top}`}} 
				onClick= {()=>handleClickOnModal()}>
			</div>
			<Modal open={isOpen}>
				<Modals handleClick={handleClickOnModal}/>
			</Modal>
		</div>
    )
}

export default ExpenseCard
