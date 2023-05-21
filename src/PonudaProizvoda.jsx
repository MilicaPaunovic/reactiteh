import React from 'react';

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <button
                  onClick={() => {
                    const productBids = bids.filter(
                      (bid) => bid.productId === product.id
                    );
                    // Prikaz ponuda za odabrani proizvod
                    console.log(productBids);
                  }}
                >
                  Detalji
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PonudaProizvoda;
