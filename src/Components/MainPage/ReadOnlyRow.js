import React from 'react'

function ReadOnlyRow({data, handleEditClick, handleDeleteClick}) {
    return (
    <tr >
        <td>{data.id}</td>
        <td>{data.Goods}</td>
        <td>{data.Price}</td>
        <td>{data.Date}</td>
        <td>
            <button type="button" onClick={(event)=>handleEditClick(event, data)}>Edit</button>
            <button type="button" onClick={()=>handleDeleteClick(data.id)}>Delete</button>
        </td>
    </tr>
  );
};

export default ReadOnlyRow