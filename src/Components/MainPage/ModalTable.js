import React, {useState, Fragment} from 'react';
import  {table_data} from '../../Resources/Constants/constants';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import './ModalTable.css';
function Table() {
	const [datas, setData] = useState(table_data)
	const newId = datas.length+1;
	const [addFormData, setAddFormData] = useState({
		 Goods:'',
		 Price:'',
		 Date:''
	})
	const [editFormData, setEditFormData]= useState({
		Goods:'',
		Price:'',
		Date:''
	})
	const [editRowId, setEditRowId] = useState(null);
	const handleAddFormChange = (event)=>{
		event.preventDefault();

		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value;

		const newFormData = {...addFormData};
		newFormData[fieldName]=fieldValue;
		setAddFormData(newFormData);
	}
	const handleEditFormChange = (event)=>{
		event.preventDefault();
		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData={...editFormData};
		newFormData[fieldName]= fieldValue;
		setEditFormData(newFormData);
	}
	const handleAddFormSubmit = (event) =>{
		event.preventDefault();
	    const newRow = {
			id:newId,
			Goods: addFormData.Goods,
			Price: addFormData.Price,
			Date: addFormData.Date,
		};
		const newData = [...datas, newRow ];
		setData(newData);
	};
	const handleEditFormSubmit = (event)=>{
		event.preventDefault();
		const editedRow = {
			id:editRowId,
			Goods: editFormData.Goods,
			Price: editFormData.Price,
			Date: editFormData.Date 
		}

		const newRow = [...datas];
		const index = datas.findIndex((data)=>data.id===editRowId);
		newRow[index]=editedRow;
		setData(newRow);
		setEditRowId(null);
	}
	const handleEditClick = (event, row)=>{
		event.preventDefault();
		setEditRowId(row.id);

		const formValues={
			Goods: row.Goods,
			Price: row.Price,
			Date: row.Date,
		}
	}
	const handleCancelClick =()=>{
		setEditRowId(null);
	}
	const handleDeleteClick = (rowDataId)=>{
		const newDatas = [...datas];
		const index = datas.findIndex((data)=>data.id===rowDataId);
		newDatas.splice(index, 1);
		setData(newDatas);
		const array_length = newDatas.length;
		for(let i=0;i<array_length;i++){
			newDatas[i].id = i+1;
		}
		setData(newDatas);
	}
	return (
		<div>
			<div className='modal-table-body'>
				<form onSubmit={handleEditFormSubmit}>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Goods</th>
								<th>Price</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{datas.map((data)=>(
								<Fragment>
									{editRowId === data.id ?(
										<EditableRow Id={data.id} editFormData={data} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
									):(
										<ReadOnlyRow data={data} handleEditClick={handleEditClick} handleDeleteClick = {handleDeleteClick}/>
									)}
								</Fragment>
							))}
						</tbody>
					</table>
				</form>
			</div>
			
			<div className='table-new-row'>
				Add a row
				<form onSubmit={handleAddFormSubmit}>
					<input
						type="text"
						name="Goods"
						required="required"
						placeholder="Write Goods"
						onChange={handleAddFormChange}
					/>
					<input
						type="number"
						name="Price"
						required="required"
						placeholder="Price"
						onChange={handleAddFormChange}
					/>
					<input
						type="date"
						name="Date"
						required="required"
						placeholder="Date"
						onChange={handleAddFormChange}
					/>
					<button type="submit">Add</button>
				</form> 
			</div>
		</div>
	)
}

export default Table