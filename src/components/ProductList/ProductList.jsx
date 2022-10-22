import React from "react";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import "./ProductList.css";

const products = [
  { id: 1, title: "title1", price: 5000, description: "description1" },
  { id: 2, title: "title2", price: 6000, description: "description2" },
  { id: 3, title: "title3", price: 7000, description: "description3" },
  { id: 4, title: "title4", price: 8000, description: "description4" },
  { id: 5, title: "title5", price: 8000, description: "description5" },
  { id: 6, title: "title6", price: 8000, description: "description6" },
  { id: 7, title: "title7", price: 8000, description: "description7" },
];

const getTotalPrice = (products) => {
  return products.reduce((acc, product) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);

    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купити ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAdd={onAdd}
          className="item"
        />
      ))}
    </div>
  );
};

export default ProductList;
