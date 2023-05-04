import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="modalDiv">
      <div className="modal rounded-2xl">
        <div className="grid grid-cols-12 py-4 px-6 modal-header">
          <div className="col-span-1 m-0">
            <button onClick={() => navigate(-1)}></button>{" "}
          </div>

          <div className="col-span-11 flex">
            <h3 className="text-xl font-bold">Step 1 of 5</h3>
          </div>
        </div>
        <div className="container create-container flex flex-col">
          <h1 className="text-3xl font-bold">Create your account</h1>

          <input
            className="modal-input border rounded-md border-gray-700"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          ></input>
          <input
            className="modal-input border rounded-md border-gray-700"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          ></input>
          <div className="text-right">Use email instead</div>

          <div className="flex flex-col create-dob">
            <h4 className="text-md font-bold">Date of birth</h4>
            <span className="text-gray-700 extra-info">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </span>
            <input
            className="modal-input border rounded-md border-gray-700"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          ></input>
          </div>
          
        </div>
        <button className="next-btn rounded-full mb-7 p-4">Next</button>
      </div>
    </div>
  );
};
