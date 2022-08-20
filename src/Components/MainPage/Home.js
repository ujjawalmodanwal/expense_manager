import React, {useState, Fragment, useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ExpenseCard from './ExpenseCard';
import './Home.css';
import EditableCard from './EditableCard';
import axios from 'axios';

function Home() {



	const fetchData = async()=>{
		const {data} = await axios.get("/data")
		const CardsData = data.CardsData;
		updateCardsData(CardsData);
	}
	useEffect(()=>{
		fetchData();
	}, [])
	


	
	const [cardsData, updateCardsData] = useState([]);
	const NumberOfCards= cardsData.length;

	const [isAddCard, setIsAddCard] = useState(true);
	const handleClickOnAddCard = () => {
		setIsAddCard(!isAddCard);
	}
	const [addCardData, setAddCardData] = useState({
        card_id: '',
        title: '',
        total_price: '',
        color: '',
    })
	const handleAddCardDataChange = (event)=>{
		event.preventDefault();
		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value;
		const newCardData = {...addCardData};
		newCardData[fieldName]=fieldValue;
		setAddCardData(newCardData);
	}
	const handleAddCardSubmit = (event) =>{
		event.preventDefault();
	    const newCard = {
			card_id:NumberOfCards+1,
			title: addCardData.title,
			total_price: "0",
			color: addCardData.color,
		};
		const newData = [...cardsData, newCard ];
		updateCardsData(newData);
		setIsAddCard(true);
	};
	
	


	const [editCardData, setEditCardData]= useState({
		card_id: '',
        title: '',
        total_price: '',
        color: '',
	})
	const [editCardId, setEditCardId] = useState(null);
	const handleEditClick = (event, card)=>{
		event.preventDefault();
		setEditCardId(card.card_id);
	}
	const handleEditCardChange = (event, cardData)=>{
		event.preventDefault();
		console.log(cardData)
		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;
		const newCardData={...cardData};
		newCardData[fieldName]= fieldValue;
		setEditCardData(newCardData);
	}
	const handleEditCardSubmit = (event, cardData)=>{
		event.preventDefault();
		const editedCard = {
			card_id:editCardId,
			title: editCardData.title,
			total_price: cardData.total_price,
			color: editCardData.color,
		
		}
		const newCardData = [...cardsData];
		const index = cardsData.findIndex((data)=>data.card_id===editCardId);
	    newCardData[index]=editedCard;
		updateCardsData(newCardData);
		setEditCardId(null);
	}
	const handleCancelClick =()=>{
		setEditCardId(null);
	}

	const handleDeleteClick = (cardDataId)=>{
		console.log("delete",cardDataId)
		const newDatas = [...cardsData];
		console.log(newDatas)
		const index = cardsData.findIndex((card)=>card.card_id === cardDataId);
		console.log("index", index)
		newDatas.splice(index, 1);
		updateCardsData(newDatas);
		const array_length = newDatas.length;
		for(let i=0;i<array_length;i++){
			newDatas[i].card_id = i+1;
		}
		updateCardsData(newDatas);
	}

	
	return (
		<div className='home-wrapper'>
			<Header/>
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			<div className='card-section'>
				{cardsData.map((cardData) => (
					<Fragment>
						{editCardId === cardData.card_id ? (
							<EditableCard isSubmit={false}
										  handleEditCardChange = {handleEditCardChange} 
							              handleEditCardSubmit = {handleEditCardSubmit} 
										  handleCancelClick = {handleCancelClick}
										  handleEditClick = {handleEditClick}
								
										  cardData = {cardData}/>
							):(
							<ExpenseCard cardData={cardData} 
										 isAddCard={false} 
										 handleDeleteClick = {handleDeleteClick}
										 handleEditClick = {handleEditClick}/>
										 
							)
						}
					</Fragment>
				))}
				<Fragment>
					{isAddCard ? <ExpenseCard isAddCard = {true} 
											  cardData = {0}
											  handleClickOnAddCard = {handleClickOnAddCard}/> 

					: <EditableCard isSubmit={true}
									handleCancel={handleClickOnAddCard} 
								    handleAddCardDataChange ={handleAddCardDataChange} 
									handleAddCardSubmit={handleAddCardSubmit}
									handleCancelClick={handleClickOnAddCard}/>
					}
				</Fragment>
			</div>
		</div>
	)
}

export default Home
