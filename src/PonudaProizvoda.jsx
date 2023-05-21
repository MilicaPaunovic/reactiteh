import React, { useState } from 'react';
import RedTabele from './RedTabele';

function PonudaProizvoda({ products, bids }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Početna stranica</h1>
      <input
        type="text"
        placeholder="Pretraga proizvoda..."
        value={search}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Ponude</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product,i) => (
            <RedTabele key={i} product={product} bids={bids}></RedTabele>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PonudaProizvoda;
