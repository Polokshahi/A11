import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

  const {signIn, googleSignIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      navigate('/')
  
      // You can redirect or show a success message here
    }).catch(err => console.log(err.message));
  }

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result =>{
      console.log(result.user);
      navigate('/')
    }).catch(err => console.log(err.message));
    

  }




  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="border border-gray-300 rounded-lg p-8 shadow-lg">
        <h1 className="text-[48px] text-black font-bold">Login your account</h1>

        <div className="">

          <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8">

            <input
              autoComplete="off"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

            <input
              autoComplete="off"
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />


            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Login
            </button>




          </form>

          <div>

            <button
              onClick={(() => handleGoogleLogin())}
              type="submit"
              className="w-full mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Sign in with Google
            </button>

          </div>



          <p className="text-center mt-3 text-black">if you have no account then <Link to={'/register'} className="underline text-blue-500">Sign Up</Link></p>
        </div>

      </div>


    </div>
  );
};

export default Login;
