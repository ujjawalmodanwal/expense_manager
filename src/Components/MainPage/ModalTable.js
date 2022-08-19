import React, {useState, Fragment} from 'react';
import  {table_data} from '../../Resources/Constants/constants';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import './ModalTable.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Table() {
	const [datas, setData] = useState(table_data)
	const newId = datas.length+1;








	const [addFormData, setAddFormData] = useState({
		 Goods:'',
		 Price:'',
		 Date:''
	})
	const handleAddFormChange = (event)=>{
		event.preventDefault();

		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value;

		const newFormData = {...addFormData};
		newFormData[fieldName]=fieldValue;
		setAddFormData(newFormData);
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









	const [editFormData, setEditFormData]= useState({
		Goods:'',
		Price:'',
		Date:''
	})
	const [editRowId, setEditRowId] = useState(null);
	const handleEditClick = (event, row)=>{
		event.preventDefault();
		setEditRowId(row.id);
		const formValues={
			Goods: row.Goods,
			Price: row.Price,
			Date: row.Date,
		}
	}
	const handleEditFormChange = (event, prevData)=>{
		event.preventDefault();
		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		console.log(fieldValue)
		const newFormData={...prevData};
		newFormData[fieldName]= fieldValue ;
		setEditFormData(newFormData);
	}
	const handleEditFormSubmit = (event)=>{
		event.preventDefault();
		const editedRow = {
			id: editRowId,
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


	const boxStyle = {height:'1vh', width:'20vh', margin:'1vh 1vh 0 0' }

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
				<h4 style={{margin:'0'}}>Add New Data</h4>
				<TextField id="outlined-basic" 
							name ="Goods" 
							label="Enter Goods" 
							size="small" 
							variant="outlined" 
							onChange={(event)=>handleAddFormChange(event)}
							style={boxStyle}/> 
				<TextField id="outlined-basic" name = "Price" label="Enter Price" size="small" variant="outlined" onChange={(event)=>handleAddFormChange(event)} style={boxStyle}/> 
				<TextField id="outlined-basic" name = "Date" label="Enter Date" size="small" variant="outlined" onChange={(event)=>handleAddFormChange(event)} style={boxStyle}/>
				<Button variant="contained" style={{margin:'1vh', height:'5vh', width:'6vw' }}onClick= {(event)=>{handleAddFormSubmit(event)}}>Submit</Button>
			</div>
		</div>
	)
}

export default Table