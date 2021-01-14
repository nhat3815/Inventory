import {ReducerLogin} from '../Component/Login/reducer.js';
import {ReducerHome} from '../Component/Home/reducerHome.js';
import { reducerNhapPO } from "../Component/NhapPO/reducerNhapPO.js";
import { reducerDotNhan } from "../Component/DotNhanPO/ReducerDotNhan.js";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  ReducerLogin,
  ReducerHome,
  reducerNhapPO,
  reducerDotNhan,
});
export {RootReducer}
