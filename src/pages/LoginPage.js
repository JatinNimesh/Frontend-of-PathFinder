// import React, { useState, useContext } from 'react'; 
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { BASE_URL } from '../api';

// const LoginPage = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const { login } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const { email, password } = formData;

//     const onChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         if (error) setError('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
//             login(response.data.token);
//             navigate('/trips');
//         } catch (error) {
//             console.error(error.response?.data);
//             setError(error.response?.data?.message || 'Login failed. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
//             <div className="max-w-md w-full">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                         </svg>
//                     </div>
//                     <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
//                     <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
//                 </div>

//                 {/* Form */}
//                 <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {error && (
//                             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
//                                 <div className="flex items-center">
//                                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                                     </svg>
//                                     {error}
//                                 </div>
//                             </div>
//                         )}

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Email Address
//                             </label>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={onChange}
//                                 required
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Enter your email"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Password
//                             </label>
//                             <input
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={onChange}
//                                 required
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Enter your password"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
//                                 loading 
//                                     ? 'bg-gray-400 cursor-not-allowed' 
//                                     : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
//                             }`}
//                         >
//                             {loading ? (
//                                 <div className="flex items-center justify-center">
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Signing in...
//                                 </div>
//                             ) : (
//                                 'Sign In'
//                             )}
//                         </button>
//                     </form>

//                     <div className="mt-6 text-center">
//                         <p className="text-gray-600">
//                             Don't have an account?{' '}
//                             <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
//                                 Sign up here
//                             </Link>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="text-center mt-6 text-sm text-gray-500">
//                     <p>Secure login protected by industry-standard encryption</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../api';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
            login(response.data.token);
            navigate('/trips');
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // return (
    //     <div className="min-h-screen flex items-center justify-center px-4 py-12 
    //                     bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
    //         <div className="max-w-md w-full">

    //             {/* Header */}
    //             <div className="text-center mb-8">
    //                 <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 
    //                                 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
    //                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    //                               d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    //                     </svg>
    //                 </div>
    //                 <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
    //                     Welcome Back
    //                 </h2>
    //                 <p className="text-rose-600/80 mt-1">Sign in to continue your journey</p>
    //             </div>

    //             {/* Form */}
    //             <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-rose-200/40">
    //                 <form onSubmit={handleSubmit} className="space-y-6">

    //                     {error && (
    //                         <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl shadow-sm">
    //                             <div className="flex items-center">
    //                                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    //                                     <path fillRule="evenodd"
    //                                           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
    //                                           clipRule="evenodd" />
    //                                 </svg>
    //                                 {error}
    //                             </div>
    //                         </div>
    //                     )}

    //                     {/* Email */}
    //                     <div>
    //                         <label className="block text-sm font-semibold text-rose-700 mb-2">
    //                             Email Address
    //                         </label>
    //                         <input
    //                             id="email"
    //                             type="email"
    //                             name="email"
    //                             value={email}
    //                             onChange={onChange}
    //                             required
    //                             className="w-full px-4 py-3 rounded-xl border border-rose-200/60 
    //                                        bg-white/60 text-rose-900 placeholder-rose-400
    //                                        focus:ring-2 focus:ring-rose-300 focus:border-transparent 
    //                                        transition-all duration-200 shadow-sm"
    //                             placeholder="Enter your email"
    //                         />
    //                     </div>

    //                     {/* Password */}
    //                     <div>
    //                         <label className="block text-sm font-semibold text-rose-700 mb-2">
    //                             Password
    //                         </label>
    //                         <input
    //                             id="password"
    //                             type="password"
    //                             name="password"
    //                             value={password}
    //                             onChange={onChange}
    //                             required
    //                             className="w-full px-4 py-3 rounded-xl border border-rose-200/60 
    //                                        bg-white/60 text-rose-900 placeholder-rose-400
    //                                        focus:ring-2 focus:ring-rose-300 focus:border-transparent 
    //                                        transition-all duration-200 shadow-sm"
    //                             placeholder="Enter your password"
    //                         />
    //                     </div>

    //                     {/* Submit Button */}
    //                     <button
    //                         type="submit"
    //                         disabled={loading}
    //                         className={`w-full py-3 px-4 rounded-xl font-semibold text-white 
    //                                    transition-all duration-300 shadow-lg 
    //                                    ${
    //                                        loading
    //                                            ? "bg-rose-300 cursor-not-allowed"
    //                                            : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:scale-105 hover:shadow-xl"
    //                                    }`}
    //                     >
    //                         {loading ? "Signing in..." : "Sign In"}
    //                     </button>
    //                 </form>

    //                 {/* Signup Link */}
    //                 <div className="mt-6 text-center">
    //                     <p className="text-rose-700/70">
    //                         Don't have an account?{" "}
    //                         <Link
    //                             to="/register"
    //                             className="text-rose-600 font-semibold hover:text-rose-800 transition"
    //                         >
    //                             Sign up here
    //                         </Link>
    //                     </p>
    //                 </div>
    //             </div>

    //             {/* Footer Note */}
    //             <div className="text-center mt-6 text-sm text-rose-500/70">
    //                 <p>Secure login protected by industry-standard encryption</p>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 
                  bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200">

            <div className="max-w-md w-full space-y-10">

                {/* NEW HEADER */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 
                bg-gradient-to-r from-pink-300 to-rose-400 
                rounded-2xl flex items-center justify-center 
                mx-auto mb-4 shadow-md">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="6" fill="#FADADD" />
                            <path d="M15 12H6m0 0l3 3m-3-3l3-3" stroke="#D94878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 4v16" stroke="#D94878" stroke-width="2" stroke-linecap="round" />
                        </svg>


                    </div>
                    <h2 className="text-4xl font-extrabold 
               bg-gradient-to-r from-rose-600 to-pink-600 
               bg-clip-text text-transparent 
               drop-shadow-sm tracking-tight">Good to Have You Back</h2>
                    <p className="text-rose-700/80 mt-3 text-lg tracking-wide">Sign in to begin your adventure</p>
                </div>

                {/* NEW LOGIN CARD */}
                <div className="rounded-2xl shadow-xl p-8 
                      bg-white/50 backdrop-blur-xl border border-rose-200/40">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* EMAIL */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-rose-700">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70 
                         placeholder-rose-400 text-rose-900 
                         focus:ring-2 focus:ring-rose-300 focus:border-transparent 
                         transition-all duration-300 shadow-sm"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-rose-700">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70 
                         placeholder-rose-400 text-rose-900
                         focus:ring-2 focus:ring-rose-300 focus:border-transparent 
                         transition-all duration-300 shadow-sm"
                                placeholder="Your password"
                            />
                        </div>

                        {/* FORGOT PASSWORD LINK */}
                        <div className="text-right">
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-rose-600 hover:text-rose-800 transition"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-semibold text-white text-lg shadow-lg 
                       transition-all duration-300 
                       ${loading
                                    ? "bg-rose-300 cursor-not-allowed"
                                    : "bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 hover:shadow-xl"
                                }`}
                        >
                            {loading ? "Signing in..." : "Login"}
                        </button>
                    </form>

                    {/* DIVIDER */}
                    <div className="flex items-center my-8">
                        <span className="w-full h-px bg-rose-300/40"></span>
                        <span className="px-3 text-rose-500">OR</span>
                        <span className="w-full h-px bg-rose-300/40"></span>
                    </div>

                    {/* SIGNUP LINK */}
                    <div className="text-center">
                        <p className="text-rose-700/80 text-sm">
                            Don’t have an account?
                        </p>

                        <Link
                            to="/register"
                            className="mt-3 inline-block px-6 py-3 rounded-xl text-rose-700 font-semibold 
                       bg-white/60 backdrop-blur-md border border-rose-200 hover:bg-white/80 
                       transition-all duration-300 hover:scale-105 shadow-md"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>

                {/* FOOTNOTE */}
                <p className="text-center text-sm text-rose-600/70">
                    Secure login protected with industry-standard encryption
                </p>
            </div>
        </div>
    );


};

export default LoginPage;

