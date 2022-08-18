import React, {useState} from 'react';
import './ExpenseCard.css';
import Modals from './ExpenseCardModal';
import Modal from "@mui/material/Modal";
import closeIcon from '../../Resources/Images/close_icon.png';
import plusIcon from '../../Resources/Images/plus_icon.png';
import menu_dots from '../../Resources/Images/three_dots.png';
import TextField from '@mui/material/TextField';



function ExpenseCard(props) {
	const isAddCard = Boolean(props.totalSpent);
	const [isOpen, setIsOpen] = useState(false);
	const handleClickOnCard = () => {
		setIsOpen(!isOpen);
	};

	const handleCardSaving =()=>{
		console.log('Saving new card data...');
	}

	const [isMenu, setIsMenu] = useState(false);
	
	const handleMenuClick =()=>{
		console.log("Menu click detected...")
		setIsMenu(!isMenu);
	}
	const getModalWindow =(isMenu)=>{
		if(!isMenu){
			return (
				<Modal open={isOpen} onClose={handleClickOnCard} >
					<Modals handleClick={handleClickOnCard} />
				</Modal>
			)
		}
	}

	const getMenuWindow=(isMenu)=>{
		if(isMenu){
			return (
				<div className='expenseCard-menu-window'>
					<div className='expenseCard-menuBox'>Rename card</div>
					<div className='expenseCard-menuBox'>Delete</div>
					<div className='expenseCard-menuBox'>Select duration</div>
					<div className='expenseCard-menuBox'>Color</div>
				</div>
			)
		}
	}
  	return (
		<div className='expensecard-wrapper'>
				{
					isAddCard ?
						<div>
							<div className='expenseCard' 
								style={{backgroundColor:`${props.color}`}}
								onClick= {handleClickOnCard}>
							
								<div className='expenseCard-title'>
									{props.title}
								</div>
								<div className='expenseCard-Pricetag'>Total Spent</div>
								<div className='expenseCard-totalSpent'>
									Rs. {props.totalSpent}
								</div>
								<img className='expenseCard-menuDots' src={menu_dots} onClick={handleMenuClick}/>
								{getMenuWindow(isMenu)}
							</div>
							{getModalWindow(isMenu)}
							
							
						</div>
					:
						!isOpen ?
							<div className='expenseCard' 
								style={{backgroundColor:`${props.color}`}}
								onClick= {handleClickOnCard}>
								<div className='expenseCard-title'>
									{props.title}
								</div>
								<img className='expenseCard-plusIcon' src={plusIcon}/>
							</div>
						:
							<div className='expenseCard-addCard' 
								style={{backgroundColor:`${props.color}`}}>
								<div className='expenseCard-textfield'>
									<TextField id="standard-basic" label="Field" variant="standard" size="small"/>
									<TextField id="standard-basic" label="Card color" variant="standard" size="small"/>
								</div>
								<img className='expenseCard-cancelIcon' src={closeIcon} onClick= {handleClickOnCard}/>
								<div className='expenseCard-saveButton' onClick={handleCardSaving}>Save</div>
							</div>

				}	
		</div>
    )
}

export default ExpenseCard
