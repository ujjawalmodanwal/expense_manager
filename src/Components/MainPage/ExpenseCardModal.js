import React, {useState}from 'react';
import './ExpenseCardModal.css';
import closeIcon from '../../Resources/Images/close_icon.png';
import ModalTable from './ModalTable';

function ExpenseCardModal(props) {
	const [openMenu, setOpenMenu] = useState(false)
   
    
  return (
        <div className='modal-overlay'>
            <div className='modal-window-wrapper'>
                <div className='modal-header'>
                    <img src = {closeIcon} className='modal-close-icon' alt='closeIcon' onClick={props.handleClick}/>
                </div>
                <div className='modal-body'>
                    <ModalTable card_id = {props.card_id} isOpen = {props.isOpen}/>
                </div>
                <div className='modal-footer'>
                    <h4 className='total-spent'>Total Spent:</h4>
                </div>
            </div>
        </div>
  )
}

export default ExpenseCardModal
