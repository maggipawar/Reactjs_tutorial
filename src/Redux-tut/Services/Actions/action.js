import { ADD_TO_CART } from "../Reducers/constants";

export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
