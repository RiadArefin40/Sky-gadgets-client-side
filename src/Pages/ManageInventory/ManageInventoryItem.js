import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageInventoryItem = ({product}) => {
    
    const {_id,name,quantity,price}=product;

    const handleUserDelete=_id=>{
        const proceed = window.confirm('Are you sure to delete')
        if(proceed){
            const url = `https://murmuring-garden-73699.herokuapp.com/product/${_id}`
            fetch(url,{
            method: 'DELETE'    
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                  toast('Item deleted')
                    
                }
                })
           

        }        
    }
    return (
    <>
        
     <tr>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>${price}</td>
          <td><button onClick={()=>handleUserDelete(_id)}>Delete</button></td>
          
       </tr>
       
    </>
      
    );
};

export default ManageInventoryItem;