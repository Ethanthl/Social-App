import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import PostSlice from "./postSlice";
import UserSlice from "./userSlice";
import AuthSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    post: PostSlice,
    auth: AuthSlice,
    user: UserSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
