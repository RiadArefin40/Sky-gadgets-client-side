
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventoryItem from './Pages/AddInventoryItem/AddInventoryItem';
import Home from './Pages/Home/Home';
import ManageItem from './Pages/Home/ManageItem/ManageItem';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addInventoryItem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }
        ></Route>
      </Routes>
      
     <Footer></Footer>
    </div>
  );
}

export default App;
