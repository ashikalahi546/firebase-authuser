import { useContext } from "react";
import { AuthContext } from "./AuthProvider";




const Login = () => {

    const {loginUser,googleLogin,setUser, facebookLogin} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        loginUser(email,password)
     }

     const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>setUser(result.user))
     }
    //  const handleFacebookLogin = () => {
    //     facebookLogin()
    //     .then(result => setUser(result.user))
    //  }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-5/12  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body w-full">
              <div className="form-control">
             
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary"> Login</button>
              </div>
            </form>
            <div className="text-center pb-7 px-8">
            <button onClick={handleGoogleLogin} className="btn btn-primary w-full"> Google Login</button>
            {/* <button onClick={handleFacebookLogin} className="btn btn-primary"> Facebook Login</button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;