import LoginForm from "@/features/login/login-form";
import { useState } from "react";
import { useRouter } from "next/router";
import MButton from "@/shared/components/m-button";
import MCheckBoxInput from "@/shared/components/inputs/m-checkbox-input";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    router.push("/dashboard");
  };
  return (
    <div className="container body pt-5 vh-100 d-flex align-items-center justify-content-center mw-100">
      <div className="pt-5 pb-5">
        <div className="text-center pb-2 pt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-person-circle text-white  opacity-75"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
        <h5 className="mb-2 text-center text-white">MEMBER LOGIN</h5>
        <div className="form-group mb-2 text-center">
          <LoginForm
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            email={email}
            password={password}
            onClickbutton={handleButtonClick}
          />
        </div>

        <div className="form-group d-flex text-white">
          <MCheckBoxInput options={[{ label: "Remember me" }]} />
          <div>
            <a href="#" className="text-white ps-5">
              Forget Password?
            </a>
          </div>
        </div>
        <div className="form-group mb-2 pt-5 text-center ">
          <a className="text-white" href="#">
            Not a member
          </a>
        </div>
        <div className="form-group mb-2  text-center pb-5">
          <MButton
            label="create account"
            classes="bg-light border border-white border-1  rounded-pill"
          />
        </div>
      </div>
    </div>
  );
}
