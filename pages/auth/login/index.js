import MyComponent from "@/shared";
export default function Login() {
  return (
    <div className="container body pt-5 vh-100 d-flex align-items-center justify-content-center mw-100">
      <div className="pt-5 pb-5">
        <div className="text-center pb-2 pt-5 ">
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
        <h5 className="mb-3 text-center text-white">MEMBER LOGIN</h5>
        <div className="form-group mb-2">
          <MyComponent />
        </div>
        <div className="form-group d-flex  text-white">
          <div className="align-items-start pe-5">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              Remember me
            </label>
          </div>
          <div className="ps-1">
            <a href="#" className="text-white">
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
          <button type="submit">Create account</button>
        </div>
      </div>
    </div>
  );
}
