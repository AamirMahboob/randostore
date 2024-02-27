import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../constants/apiConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Reusable/Button";
import { toast } from "react-hot-toast";
import InputBlock from "../components/InputBlock";
import { ADD_ITEMS } from "../constants/constant";

const schema = yup.object().shape({
  name: yup.string().required(ADD_ITEMS.nameIsRequired),
  price: yup.number().required(ADD_ITEMS.priceIsRequired),
  img: yup.string().url().required(ADD_ITEMS.ImageUrlIsRequired),
});

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/items`, data);
      toast.success(response.data.message || 'Item added succesfully');
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  return (
    <div className="flex  flex-col justify-center items-center sm:overflow-x-hidden  h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 sm:w-60 md:w-96 border border-black rounded-lg shadow-md p-5 md:p-10"
      >
        <InputBlock
          register={register}
          label={ADD_ITEMS.nameLabel}
          placeholder={ADD_ITEMS.namePlaceholder}
          name={ADD_ITEMS.name}
          error={errors}
          isError={errors.name}
        />
        <InputBlock
          register={register}
          label={ADD_ITEMS.priceLabel}
          placeholder={ADD_ITEMS.pricePlaceholder}
          name={ADD_ITEMS.price}
          type="number"
          error={errors}
          isError={errors.price}
        />
        <InputBlock
          register={register}
          label={ADD_ITEMS.imageUrl}
          placeholder={ADD_ITEMS.imagePlaceholder}
          name={ADD_ITEMS.img}
          error={errors}
          isError={errors.img}
        />
        <Button type={ADD_ITEMS.btnLabel}>{ADD_ITEMS.addItems}</Button>
      </form>
    </div>
  );
};

export default AddItems;
