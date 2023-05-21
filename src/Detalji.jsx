import React from 'react';
import { useParams } from 'react-router-dom';

function Detalji({ products, bids }) {
  let { id } = useParams();
  const product = products.find(product => product.id === Number(id));
  const productBids = bids.filter((bid) => bid.productId === product.id);

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
    </div>
  );
}

export default Detalji;
