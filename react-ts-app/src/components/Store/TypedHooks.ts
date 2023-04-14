import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { IRootState, IRootDispatch } from "./Store";

type IDispatchFunc = () => IRootDispatch;

export const useAppDispatch: IDispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
