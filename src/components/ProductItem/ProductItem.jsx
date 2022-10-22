import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product"}>
      <div className="img" />
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        <span>
          Вартість: <b>{product.price}</b>
        </span>
      </div>
      <Button onClick={onAddHandler}>Добавити в корзину</Button>
    </div>
  );
};

export default ProductItem;
