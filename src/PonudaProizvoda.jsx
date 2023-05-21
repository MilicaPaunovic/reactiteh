import React from 'react';
import RedTabele from './RedTabele';

function PonudaProizvoda({ products, bids }) {
  return (
    <div>
      <h1>Početna stranica</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Ponude</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,i) => (
            <RedTabele key={i} product={product} bids={bids}></RedTabele>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PonudaProizvoda;
