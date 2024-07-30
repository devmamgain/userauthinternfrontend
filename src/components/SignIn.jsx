import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const apimainurl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const dataSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const response = await axios.post(apimainurl + "api/auth/login", {
                email,
                password
            });
            localStorage.setItem("token", JSON.stringify(response.data));
            navigate("/");
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const isTokenValid = () => {
        try {
            const tokenString = localStorage.getItem('token');
            const token = tokenString ? JSON.parse(tokenString) : null;
            return token && token.token;
        } catch (error) {
            console.error('Error parsing token from localStorage', error);
            return false;
        }
    };

    if (isTokenValid()) {
        return <Navigate to="/" />;
    }

    return (
        <div className="bg-gradient-to-b from-[#075963] to-[#01C5BF] min-h-screen flex justify-center items-center">
            <form onSubmit={dataSubmit} className="grid sm2:w-[50%] sm:w-[90%] md:w-[40%] lg:w-[30%] bg-[#1C2D4F] p-10 gap-5 rounded-lg relative mt-10 mb-10 items-center text-white">
                <h1 className="text-lg absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-[#00F5E1] px-10 py-4 rounded-sm text-[#019EA4] text-center">SIGN IN</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-20 mt-10 mx-auto text-[#878CA4]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} className="focus:outline-none bg-[#4C5874] px-3 py-2 rounded-lg" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                <div className="flex ">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:outline-none bg-[#4C5874] px-3 py-2 rounded-lg flex-grow"
                />
                   {!showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={() => setShowPassword(!showPassword)} className="size-6 absolute right-12 mt-2 cursor-pointer"> 
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg> :
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={() => setShowPassword(!showPassword)}  className="size-6 absolute right-12 mt-2 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

}
</div>
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              
                <h1 className="text-sm text-[#019EA4] underline cursor-pointer" onClick={() => navigate("/signup")}>Click here to SignUp?</h1>
                <button type="submit" className="bg-[#00F5E1] py-3 rounded-lg mt-7 text-[#019EA4]">Login</button>
            </form>
        </div>
    );
};

export default SignIn;
