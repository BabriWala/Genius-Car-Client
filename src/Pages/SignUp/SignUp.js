import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createuser} = useContext(AuthContext)
  
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createuser(email,password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .then(err => console.error(err));
    }

    return (
        <div className="hero w-full text-center my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20">
        <div className="text-center lg:text-left">
          <img src={img} alt="Login" className="w-3/4" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sing Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name='name'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name='password'
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#FF3811] border-transparent hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]"
              />
            </div>
          </form>
          <p className=" text-center">Already have an account <Link className="font-bold text-[#FF3811]" to={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;