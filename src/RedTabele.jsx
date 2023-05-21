import React from 'react';

function RedTabele({ product, bids }) {
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>
        <button
          onClick={() => {
            const productBids = bids.filter(
              (bid) => bid.productId === product.id
            );
            
            console.log(productBids);
          }}
        >
          Detalji
        </button>
      </td>
    </tr>
  );
        }

export default RedTabele;