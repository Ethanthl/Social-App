import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { savePost } from "../../store/postSlice";

const Form = () => {
  const dispatch = useAppDispatch();

  const [postData, setPostData] = useState({ name: "", message: "", file: ""});
  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
        setPostData({ ...postData, file: fileReader.result as string });
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <>
      <label>name</label>
      <input
        onChange={(e) => setPostData({ ...postData, name: e.target.value })}
      ></input>
      <label>message:</label>
      <input
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      ></input>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];
            convertToBase64(file);
          }
        }}
      ></input>
      <button
        onClick={() => {
          const data = postData;
          dispatch(savePost(JSON.stringify(data)));
        }}
      >
        Post
      </button>
    </>
  );
};

export default Form;
