import { useState } from "react"
import { useRouter } from 'next/router';
export default function Login (){
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
    }else{
        router.push('/Dashboard/index');
    } 
};
    return(
        <div className="Container bg-warning bg-gradient pt-5 h-100 d-flex align-items-center justify-content-center mw-100">
        <div className="login p-5">
            <div className="align-items-center text-center pb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle text-white  opacity-75" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </div>
                <h5 className="mb-3 lable text-center">MEMBER LOGIN</h5>
                <form className="needs-validation" onSubmit={handleFormSubmit}>
                <div className="form-group was-validated mb-2">
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Username" className="form-control  border-3 border-white" required></input>
                    
                </div>
                <div className="form-group was-validated mb-2 pt-2">
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" className="form-control  border-3 border-white" required></input>
                    
                </div>
                <div className="form-group mb-2">  
                
                    <button  type="submit" className="btn btn-dark w-100 mt-2">Login Now</button>
                  
                </div>
                <div className="form-group d-flex  text-white">   
                   <div className="align-items-start pe-5">
                    <input type="checkbox" className="form-check-input"></input>
                    <label htmlFor="check" className="form-check-label">Remember me</label>
                    </div>
                    <div  className="ps-1">
                        <a href="" className="text-white">Forget Password?</a>
        
                        
                    </div>
                   
                </div>
                <div className="form-group mb-2 pt-5 text-center "><a className="text-white"  href=""> Not a member</a></div>
                <div className="form-group mb-2 text-center"> <button type='submit' className="btn btn-dark w-50 mt-2">Create account</button></div>
                </form>
        </div>
        </div>
    )
}