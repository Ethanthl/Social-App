import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addPost, savePost } from "../../store/postSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <label>name</label>
      <input onChange={(e) => setName(e.target.value)}></input>
      <label>message:</label>
      <input onChange={(e) => setMessage(e.target.value)}></input>
      <button
        onClick={() => {
          const data = {
            name: name,
            message: message,
          };
          dispatch(savePost(JSON.stringify(data)));
        }}
      >
        Post
      </button>
    </>
  );
};

export default Form;
