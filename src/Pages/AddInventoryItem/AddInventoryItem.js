
import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import './AddInventoryItem.css'

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,e) =>{
     const product ={
         name:data.name,
         price:data.price,
         quantity:data.quantity,
         description:data.description,
         img:data.img,
         suppliername:data.supplierName,
         email:email,
     }
    console.log(product);
    const url = `https://murmuring-garden-73699.herokuapp.com/product`;
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(result=>{
        toast('New Item Added ')
        console.log(user)
    })
    
    e.target.reset();
  } ;
  return (
    <div className="w-50 mx-auto submit-form my-5 p-3">
      <h2>Add New Inventory Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        
        <h3>Product Details</h3>
        <input  className="my-2" placeholder="Product Name" {...register("name")} required/>
        <input className="my-2" placeholder="Price" {...register("price")} required  />
        <input  className="my-2" placeholder="Product Quantity" type="number" {...register("quantity")}required />
    
        <textarea   className="my-2" placeholder="Product Description" {...register("description")}required />
        <input  className="my-2" placeholder="Image url" {...register("img") } required/>
        <input  className="my-2" placeholder="Supplier Name" {...register("supplierName")} required />
        
        <input className="btn btn-dark w-50 mx-auto my-5" type="submit" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddInventoryItem;
