import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  updateProfile } from "firebase/auth";

const Register = () => {
    const { signUp, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;

    try {
        const result = await signUp(email, password);
        const createdUser = result.user;

        await updateProfile(createdUser, {
            displayName: name,
            photoURL: photo,
        });

        // Sign the user out immediately after registration

        await logOut();

        form.reset();
        navigate('/login'); // Redirect to login page
    } catch (err) {
        console.error("Registration error:", err.message);
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="border border-gray-300 rounded-lg p-8 shadow-lg">
                <h1 className="text-[48px] text-black font-bold">Create an Account</h1>

                <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-3 text-black">
                    Already have an account?{" "}
                    <Link to="/login" className="underline text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
