import React from "react";
import MenuItem from "./MenuItem";
import menu from "../data/menuData";

function Menu() {
  return (
    <div className="menu-container">
      <h2>Restaurantmeny</h2>
      <div className="menu-grid">
        {menu.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
