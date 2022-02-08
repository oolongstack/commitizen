import { INCREMENT } from "./constants";
import { action } from "./reducer";
export const incrementAction: (payload: number) => action = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
