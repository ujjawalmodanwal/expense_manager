import React from 'react';
import './ExpenseCardModal.css';
import closeIcon from '../../Resources/Images/close_icon.png';

function ExpenseCardModal(props) {
    
  return (
        <div className='modal-overlay'>
            <div className='modal-window-wrapper'>
                <div className='modal-header'>
                    <img src = {closeIcon} className='modal-close-icon' alt='closeIcon' onClick={props.handleClick}/>
                </div>
                <div className='modal-body'></div>
                <div className='modal-footer'></div>
            </div>
        </div>
  )
}

export default ExpenseCardModal
