import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Myitem from './Myitem';

const MyItems = () => {
    const [user]= useAuthState(auth)
    const[products,setProducts]=useState([])
    const email = user?.email;
    console.log(email)
    useEffect(()=>{
       
        const url=`https://murmuring-garden-73699.herokuapp.com/myproduct?email=${email}`
        fetch(url,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[products])
    return (
        <Container>
        <h2 className='p-5'>My products Quantity: {products.length}</h2>
      
       
        <Table responsive striped bordered hover variant="dark">
          
          <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    
          </thead>
          <tbody>
        
          {
            products && !!products.length && products.map(product=> 
                <Myitem key={product._id} product={product}></Myitem>
            )
        }
    
          
          </tbody>
          </Table>
          <Link to="/addInventoryItem">
      <Button variant="dark" className="my-5 px-4">Add New Item</Button>
 </Link>
          </Container>
    );
};

export default MyItems;