 
import { useState } from 'react';
import './App.css';
import PonudaProizvoda from './PonudaProizvoda';

function App() {

  const [products] = useState([
    { id: 1, title: 'Proizvod 1', description: 'dsadasd as dasd a d sa das a s ad', price: 10 },
    { id: 2, title: 'Proizvod 2', description: 'dsadasd as dasd a d sa das a s ad', price: 20 },
  ]);
  
  const [bids] = useState([
    { productId: 1, amount: 50 },
    { productId: 1, amount: 60 },
    { productId: 2, amount: 70 },
  ]);
 


  return (
    <div className="App">
      <PonudaProizvoda products={products} bids={bids}> </PonudaProizvoda>
    </div>
  );
}

export default App;
