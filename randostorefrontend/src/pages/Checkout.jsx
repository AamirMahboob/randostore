import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CHECKOUT } from "../constants/constant";
import { toast } from "react-hot-toast";
const Checkout = () => {
  const [cartitems, setCartItems] = useState([]);
  const data = JSON.parse(localStorage.getItem("item"));

  useEffect(() => {
    setCartItems(data);
  }, []);

  const handleRemove = (id) => {
    let filterItems = cartitems.filter((item) => item.id !== id);
    setCartItems(filterItems);
    localStorage.setItem("item", JSON.stringify(filterItems));
    toast.error("item remove from cart successfully")

  };
  return (
    <div className="flex flex-col mx-1 md:mx-10 justify-center items-center ">
      {cartitems && cartitems.length > 0 ? (
        cartitems.map((item) => (
          <ProductCard
            key={item.id}
            isShowAll={false}
            item={item}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <Link to="/showItems">
          <h1 className="font-bold mt-3">{CHECKOUT.pleaseAdd}</h1>
        </Link>
      )}
    </div>
  );
};

export default Checkout;
