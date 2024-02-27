import React from "react";
import Button from "../Reusable/Button";
import { PRODUCT_CARD } from "../constants/constant";
const ProductCard = ({
  isShowAll,
  item,
  handleRemove,
  handleDelete,
  handleItem,
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-[70%] h-40 shadow-lg rounded-md">
      <div className="mx-3">
        <h1>{item.name}</h1>
        <img src={item.img} />
        <h2>{`${PRODUCT_CARD.price} ${item.price}`}</h2>
      </div>
      <div className="mx-3 ">
        {isShowAll ? (
          <div className="flex justify-between gap-3">
            <Button onClick={() => handleItem(item)}>
              {PRODUCT_CARD.addToCart}
            </Button>
            <Button onClick={() => handleDelete(item.id)}>
              {PRODUCT_CARD.Delete}
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={() => handleRemove(item.id)}>
              {PRODUCT_CARD.removeCart}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
