import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../constants/apiConfig";
import { SHOW_DATA } from "../constants/constant";
import { toast } from "react-hot-toast";

const ShowData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/items`);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItem = (data) => {
    const getItem = JSON.parse(localStorage.getItem("item"));

    if (getItem) {
      getItem.find((item) => item?.id === data?.id)
        ? alert(SHOW_DATA.alreadyExists)
        : getItem.push(data);
      localStorage.setItem("item", JSON.stringify(getItem));
    } else {
      localStorage.setItem("item", JSON.stringify([data]));
    }
    toast.success("item added to cart successfully")
    navigate("/cartItems");
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/items/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
      
    }
    toast.error('item removed successfully');
  };

  return (
    <div className="flex justify-center flex-col items-center overflow-x-hidden   p-3">
      <h1 className="text-black font-bold">{SHOW_DATA.title}</h1>
      {data?.map((item) => (
        <ProductCard
          isShowAll={true}
          key={item.id}
          item={item}
          handleItem={handleItem}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ShowData;
