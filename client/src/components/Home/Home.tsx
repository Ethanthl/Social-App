import React, { useEffect, useState } from "react";

import Posts from "./../Posts/Posts";
import Form from "./../Form/Form";
import { useAppDispatch } from "../../store/store";
import { fetchPost } from "../../store/postSlice";
import tweet from "./../../images/tweet.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-9 ">
        <div className="p-2 col-span-2">
          <div className="p-2">
            <img src={tweet} width="32px" className="p-1"></img>
          </div>
          <div className="p-2 ">
            <a className="text-xl p-2 flex items-center">
              <span className="pr-6 text-3xl ">#</span>
              <span className="font-semibold">Explore</span>
            </a>
          </div>
        </div>
        <div className="border-l border-r col-span-4 primary-col border-gray-700 min-h-screen">
          <div className="container mx-auto">
            <Posts />
          </div>
        </div>
        <div className="py-3 px-8 col-span-3">
          <div className="border  border-gray-700 px-4 py-3 rounded-2xl">
            <h2 className="text-xl font-bold">New to Twitter?</h2>
            <span className="text-gray-500">
              <small>Sign up now to get your own personalized timeline!</small>
            </span>
            <Link
              to="/signup"
              state={{ background: location }}
            >
              <button className="rounded-full background-white max-300">Create account</button>
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
