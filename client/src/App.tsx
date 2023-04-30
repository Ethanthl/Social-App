import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import tweet from "./images/tweet.png";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useAppDispatch } from "./store/store";
import { fetchPost } from "./store/postSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-2 ">
        <div className="p-2">
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
        <div className="border-l border-r col-span-2 primary-col border-gray-700 min-h-screen">
          <div className="container mx-auto">
            <Posts />
          </div>
        </div>
        <div className="p-2">
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
