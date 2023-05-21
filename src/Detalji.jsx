import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Detalji({ products, bids, onAdd }) {
  let { id } = useParams();
  const product = products.find(product => product.id === Number(id));
  const productBids = bids.filter((bid) => bid.productId === product.id);

  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      productId: product.id,
      amount: bidAmount,
    });
    setBidAmount('');
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>Bids</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {productBids.map((bid) => (
            <tr key={bid.id}>
              <td>{bid.id}</td>
              <td>{bid.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
          Iznos ponude:
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Dodaj ponudu</button>
      </form>
    </div>
  );
}

export default Detalji;
