import React from "react";

function MenuItem({ title, price, ingredients, category }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Pris:</strong> {price} kr</p>
      <p><strong>Ingredienser:</strong> {ingredients}</p>
      <p><strong>Kategori:</strong> {category}</p>
    </div>
  );
}

export default MenuItem;
