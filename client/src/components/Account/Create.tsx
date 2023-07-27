import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../store/userSlice";
import { useAppDispatch } from "../../store/store";

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div className="modalDiv">
      <div className="modal rounded-2xl">
        <div className="grid grid-cols-12 py-4 px-6 modal-header">
          <div className="col-span-1 m-0">
            <button onClick={() => navigate("/")}></button>{" "}
          </div>

          <div className="col-span-11 flex">
            <h3 className="text-xl font-bold">Step {step} of 4</h3>
          </div>
        </div>
        {step === 1 && (
          <div>
            <div className="container create-container flex flex-col">
              <h1 className="text-3xl font-bold">Create your account</h1>

              <input
                className="modal-input border rounded-md border-gray-700"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              ></input>
              <input
                className="modal-input border rounded-md border-gray-700"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              ></input>
              <div className="text-right">Use phone instead</div>

              <div className="flex flex-col create-dob">
                <h4 className="text-md font-bold">Date of birth</h4>
                <span className="text-gray-700 extra-info">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </span>
                <input
                  className="modal-input border rounded-md border-gray-700"
                  placeholder="DD/MM/YYYY"
                  onChange={(e) => setDob(e.target.value)}
                ></input>
              </div>
            </div>
            <button
              className="next-btn rounded-full my-7 p-4"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="container create-container flex flex-col">
              <h1 className="text-3xl font-bold mb-7">
                Customize your experience
              </h1>
              <h2 className="text-xl font-bold mb-4">
                Track where you see Twitter content across the web
              </h2>
              <p>
                Twitter uses this data to personalize your experience. This web
                browsing history will never be stored with your name, email, or
                phone number.
              </p>

              <div className="flex flex-col create-dob">
                <span className="text-gray-700 extra-info">
                  By signing up, you agree to our Terms, Privacy Policy, and
                  Cookie Use. Twitter may use your contact information,
                  including your email address and phone number for purposes
                  outlined in our Privacy Policy. Learn more
                </span>
              </div>
            </div>
            <button
              className="next-btn rounded-full my-7 p-4"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="container create-container flex flex-col">
              <h1 className="text-3xl font-bold">Create your account</h1>
              <input
                className="modal-input border rounded-md border-gray-700"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                placeholder="Name"
              ></input>

              <input
                className="modal-input border rounded-md border-gray-700"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={email}
                placeholder="Email"
              ></input>
              <input
                className="modal-input border rounded-md border-gray-700"
                placeholder="DD/MM/YYYY"
                defaultValue={dob}
              ></input>
              <div className="flex flex-col create-dob">
                <span className="text-gray-700 extra-info">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use. Twitter may use your contact
                  information, including your email address and phone number for
                  purposes outlined in our Privacy Policy, like keeping your
                  account secure and personalizing our services, including ads.
                  Learn more. Others will be able to find you by email or phone
                  number, when provided, unless you choose otherwise here.
                </span>
              </div>
            </div>
            <button
              className="next-btn rounded-full my-7 p-4"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="container create-container flex flex-col">
              <h1 className="text-3xl font-bold">Create your account</h1>
              <input
                className="modal-input border rounded-md border-gray-700"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
              <div className="flex flex-col create-dob">
                <span className="text-gray-700 extra-info">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy, including Cookie Use. Twitter may use your contact
                  information, including your email address and phone number for
                  purposes outlined in our Privacy Policy, like keeping your
                  account secure and personalizing our services, including ads.
                  Learn more. Others will be able to find you by email or phone
                  number, when provided, unless you choose otherwise here.
                </span>
              </div>
            </div>

            <button
              className="next-btn rounded-full my-7 p-4"
              onClick={() => {
                const data = {
                  name: name,
                  email: email,
                  password: password,
                };
                dispatch(newUser(JSON.stringify(data))).then((result) => {
                  console.log(result);
                });
                navigate(-1);
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
