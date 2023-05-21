import React from 'react';
import { useNavigate } from 'react-router-dom';
function RedTabele({ product, bids }) {
    const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>
      <button onClick={handleDetailsClick}>
          Detalji
        </button>
      </td>
    </tr>
  );
        }

export default RedTabele;