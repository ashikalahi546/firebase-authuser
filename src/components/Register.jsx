import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { registerUser,setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [gmailError, setGmailError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    if (!/@gmail\.com$/.test(email)) {
      setGmailError("email must end with @gmail.com");
      return;
    }

    if (password !== confirmpassword) {
      setError('password did"n match');
      return;
    }
    if (password.length < 6) {
      setError("password must be at least 6 character ");
      return;
    }
    if (!/\d{2}$/.test(password)) {
      setError("password must end with at least 2 number");
      return;
    }
    setGmailError("");
    setError("");

    console.log(name, photo, email, password, confirmpassword);
    registerUser(email, password)
.then(result => setUser(result.user))
.catch(error => setError(error.message))
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Regsiter now!</h1>
        </div>
        <div className="card shrink-0 w-5/12  shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                name="name"
                className="input input-bordered "
                required
              />
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                name="photo"
                className="input input-bordered "
                required
              />
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
              <span className="text-red-500">
                {gmailError && <p>{gmailError}</p>}
              </span>
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
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <div className="text-red-500 mt-3">{error && <p>{error}</p>}</div>
              {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Regsiter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
