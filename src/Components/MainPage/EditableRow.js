import React from 'react'

function EditableRow({Id, editFormData, handleEditFormChange, handleCancelClick}) {
    return (
    <tr>
        <td>
            {Id}
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter goods ..."
                name="Goods"
                defaultValue={editFormData.Goods}
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input
                type="number"
                required="required"
                placeholder="Enter price ..."
                name="Price"
                defaultValue={editFormData.Price}
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter date ..."
                name="Date"
                defaultValue={editFormData.Date}
                onChange={handleEditFormChange}
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