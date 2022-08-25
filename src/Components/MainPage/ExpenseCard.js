import React, {useState} from 'react';
import './ExpenseCard.css';
import ExpenseCardModal from './ExpenseCardModal';
import Modal from "@mui/material/Modal";
import plusIcon from '../../Resources/Images/plus_icon.png';
import menu_dots from '../../Resources/Images/three_dots.png';




function ExpenseCard(props) {
	const isAddCard = Boolean(props.isAddCard);
	const [isOpen, setIsOpen] = useState(false);
	const [isMenu, setIsMenu] = useState(false);
	


	const handleModalWindow = () => {
		setIsOpen(!isOpen);
	}
	const handleMenuClick =()=>{
		setIsMenu(!isMenu);
	}


	const getModalWindow =(isMenu)=>{
		
		if(!isMenu && isOpen){
			return (
				<Modal open={isOpen} onClose={handleModalWindow} >
					<ExpenseCardModal card_id ={props.cardData._id} getData={isOpen} handleClick={handleModalWindow} />
				</Modal>
			)
		}
	}
	const getMenuWindow=(isMenu)=>{
		if(isMenu){
			return (
				<div className='expenseCard-menu-window'>
					<div className='expenseCard-menuBox'onClick={(event) => props.handleEditClick(event, props.cardData)} >Edit</div>
					<div className='expenseCard-menuBox' onClick={()=>props.handleDeleteClick(props.cardData._id)}>Delete</div>
				</div>
			)
		}
	}

	const getRegularCard =()=>{
		return(
			<div>
				<div className='expenseCard' 
					style={{backgroundColor:`${props.cardData.color}`}}
					onClick= {handleModalWindow}>
					<div className='expenseCard-title'>
						{props.cardData.title}
						
					</div>
					<div className='expenseCard-Pricetag'>Total Spent</div>
					<div className='expenseCard-totalSpent'>
						Rs. {props.cardData.total_price}
					</div>
					<img className='expenseCard-menuDots' alt="menu" src={menu_dots} onClick={handleMenuClick}/>
					{getMenuWindow(isMenu)}
				</div>
				{getModalWindow(isMenu)}
			</div>
		)
	}

	const getAddCard = () =>{
		return(
			<div className='expenseCard' 
				style={{backgroundColor:'#cccccc'}}
				onClick= {props.handleClickOnAddCard}>
				<div className='expenseCard-title'>
					Add New
				</div>
				<img className='expenseCard-plusIcon' alt="add" src={plusIcon}/>
			</div>
		)
	}


  	return (
		<div className='expensecard-wrapper'>
			{isAddCard ? getAddCard() : getRegularCard()}
		</div>
    )
}

export default ExpenseCard
