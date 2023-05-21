 
import { useState } from 'react';
import './App.css';
import PonudaProizvoda from './PonudaProizvoda';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Detalji from './Detalji';
function App() {

  const [products] = useState([
    { id: 1, title: 'Proizvod 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', price: 10 },
    { id: 2, title: 'AAA 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', price: 20 },
  ]);
  
  const [bids,setBids] = useState([
    { id:1,productId: 1, amount: 50 },
    { id:2,productId: 1, amount: 60 },
    { id:3, productId: 2, amount: 70 },
  ]);
 

  const handleAddBid = (bid) => {
   
    bid.id = bids.length + 1;
    setBids((prevBids) => [...prevBids, bid]);
  };
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>

        <Route path='/' element={<PonudaProizvoda products={products} bids={bids}> </PonudaProizvoda>}></Route>
        <Route path='/product/:id' element={<Detalji products={products} bids={bids} onAdd={handleAddBid}> </Detalji> }></Route>
        </Routes>

 
      
      </Router>
  );
}

export default App;
