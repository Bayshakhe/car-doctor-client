import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {signinUser} = useContext(AuthContext)
    // console.log(user)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signinUser(email,password)
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }
  return (
    <div className="hero py-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <img src={loginImg} className="max-w-sm rounded-lg p-3" />
        <form onSubmit={handleLogin}>
          <div className="card-body border ">
            <h2 className="text-center font-semibold text-3xl mb-4">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered rounded-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered rounded-md"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3811]">Login</button>
            </div>
            <p className="text-center mt-3">Or Sign in with</p>
            <div className="flex justify-center">
                <img className="w-12" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" />
                <img className="w-12" src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+logo+website+icon-1320190502625926346.png" alt="Facebook" />
                <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qONJfLFqTbfAacaOuzgSQQigqxPM2o8njg&usqp=CAU" alt="Linkedin" />
            </div>
            <p className="text-center">Dont have an account? <Link to='/signup' className="text-[#ff3811] font-bold">Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
