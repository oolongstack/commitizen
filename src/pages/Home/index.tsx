import React, { FC, memo } from "react";
import { connect } from "react-redux";
import { initialState } from "../../store/reducer";
import { incrementAction } from "../../store/actionCreators";
const Home: FC = (props: any) => {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={() => props.add10(10)}>+1</button>
    </div>
  );
};
const mapStateToProps = (state: initialState) => ({
  number: state.number,
});
const mapDispatchToProps = (dispatch: any) => ({
  add10: (num: number) => dispatch(incrementAction(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
