import { Route, Routes } from "react-router-dom";
import AddItems from "../pages/AddItems";
import ShowData from "../pages/ShowData";
import Checkout from "../pages/Checkout";
import Layout from "../Layout/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AddItems />} />
           <Route path="/showItems" element={<ShowData />} />
        <Route path="/cartitems" element={<Checkout />} /> 
      </Route>
    </Routes>
  );
};

export default Router;
