import { INCREMENT } from "./constants";
export interface initialState {
  number: number;
}
export interface action {
  type: string;
  payload: any;
}
const initialState: initialState = {
  number: 0,
};
export default function reducer(
  state = initialState,
  action: action
): initialState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + action.payload };
    default:
      return { ...state };
  }
}
