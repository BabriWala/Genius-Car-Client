import React from "react";
import img from "../../assets/images/login/login.svg";

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }

  return (
    <div className="hero w-full text-center my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20">
        <div className="text-center lg:text-left">
          <img src={img} alt="Login" className="w-3/4" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#FF3811] border-transparent hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
