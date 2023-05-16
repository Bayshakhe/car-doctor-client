import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Signup = () => {
    const {createUser,googleLogin} = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }
    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => console.log(error.message))
    }

    return (
        <div className="hero py-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <img src={logoImg} className="max-w-sm rounded-lg p-3" />
        <form onSubmit={handleSignup}>
          <div className="card-body border ">
            <h2 className="text-center font-semibold text-3xl mb-4">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your name"
                className="input input-bordered rounded-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
                name='password'
                placeholder="Your password"
                className="input input-bordered rounded-md"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3811]">Sign Up</button>
            </div>
            <p className="text-center mt-3">Or Sign in with</p>
            <div className="flex justify-center">
                <img onClick={handleGoogleLogin} className="w-12" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" />
                <img className="w-12" src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+logo+website+icon-1320190502625926346.png" alt="Facebook" />
                <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qONJfLFqTbfAacaOuzgSQQigqxPM2o8njg&usqp=CAU" alt="Linkedin" />
            </div>
            <p className="text-center">Already have an account? <Link to='/login' className="text-[#ff3811] font-bold">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Signup;