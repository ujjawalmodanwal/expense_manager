import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditableRow({Id, editFormData, handleEditFormChange, handleCancelClick}) {

    const boxStyle = {maxWidth: '8vh !important', maxHeight:'2vh !important', minWidth: '8vh !important', minHeight: '2vh !important'}
    return (
    <tr>
        <td>
            {Id}
        </td>
        <td>
            <TextField
                style = {boxStyle}
                variant="outlined"
                name="Goods"
                label="Enter Goods"
                defaultValue={editFormData.Goods}
                onChange={(event)=>handleEditFormChange(event, editFormData)}
            />
        </td>
        <td>
            <TextField
                style = {boxStyle}
                variant="outlined"
                name="Price"
                label="Enter Price"
                defaultValue={editFormData.Price}
                onChange={(event)=>handleEditFormChange(event, editFormData)}
            />
        </td>
        <td>
            <TextField
                style = {boxStyle}
                variant="outlined"
                name="Date"
                label="Enter Date"
                defaultValue={editFormData.Date}
                onChange={(event)=>handleEditFormChange(event, editFormData)}
            />
        </td>
        <td>
            <button type="submit">save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow