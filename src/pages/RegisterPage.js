// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { BASE_URL } from '../api';

// const RegisterPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { login } = useContext(AuthContext);

//     const { name, username, email, password, confirmPassword } = formData;

//     const onChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         if (error) setError('');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Client-side validation
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         if (password.length < 6) {
//             setError('Password must be at least 6 characters long');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post(`${BASE_URL}/api/auth/register`, {
//                 name, username, email, password
//             });

//             // Auto-login after successful registration
//             if (response.data.token) {
//                 login(response.data.token);
//                 navigate('/trips');
//             } else {
//                 navigate('/login');
//             }
//         } catch (error) {
//             console.error(error.response?.data);
//             setError(error.response?.data?.message || 'Registration failed. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-50 to-blue-50">
//             <div className="max-w-md w-full">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-3xl font-bold text-gray-900">Join RoadVenture</h2>
//                     <p className="text-gray-600 mt-2">Create your account to start planning amazing trips</p>
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
//                             <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Full Name
//                             </label>
//                             <input
//                                 id="name"
//                                 type="text"
//                                 name="name"
//                                 value={name}
//                                 onChange={onChange}
//                                 required
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Enter your full name"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Username
//                             </label>
//                             <input
//                                 id="username"
//                                 type="text"
//                                 name="username"
//                                 value={username}
//                                 onChange={onChange}
//                                 required
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Choose a username"
//                             />
//                         </div>

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
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
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
//                                 minLength="6"
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Create a password (min. 6 characters)"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 id="confirmPassword"
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={confirmPassword}
//                                 onChange={onChange}
//                                 required
//                                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
//                                 placeholder="Confirm your password"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
//                                 loading 
//                                     ? 'bg-gray-400 cursor-not-allowed' 
//                                     : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
//                             }`}
//                         >
//                             {loading ? (
//                                 <div className="flex items-center justify-center">
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Creating Account...
//                                 </div>
//                             ) : (
//                                 'Create Account'
//                             )}
//                         </button>
//                     </form>

//                     <div className="mt-6 text-center">
//                         <p className="text-gray-600">
//                             Already have an account?{' '}
//                             <Link to="/login" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200">
//                                 Sign in here
//                             </Link>
//                         </p>
//                     </div>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="text-center mt-6 text-xs text-gray-500">
//                     <p>By creating an account, you agree to our Terms of Service and Privacy Policy</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;


import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../api';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const { name, username, email, password, confirmPassword } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/register`, {
                name, username, email, password
            });

            // Auto-login after successful registration
            if (response.data.token) {
                login(response.data.token);
                navigate('/trips');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error(error.response?.data);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 
                    bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200">

            <div className="max-w-md w-full">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-400 
                                rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="6" fill="#FDE2E8" />
                            <circle cx="10" cy="10" r="3" stroke="#D94878" stroke-width="2" />
                            <path d="M4 20c0-3 3-5 6-5" stroke="#D94878" stroke-width="2" stroke-linecap="round" />
                            <path d="M17 9v6m3-3h-6" stroke="#D94878" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-600 
                               bg-clip-text text-transparent">
                        Create Your Account
                    </h2>

                    <p className="text-rose-700/80 mt-2 text-lg">
                        Get started and begin planning unforgettable trips
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 
                            border border-rose-200/40">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {error && (
                            <div className="bg-rose-50 border border-rose-300 text-rose-700 px-4 py-3 
                                        rounded-xl shadow-sm">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            </div>
                        )}

                        {/* INPUT FIELDS */}
                        <div>
                            <label className="block text-sm font-semibold text-rose-700 mb-2">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70
                                       placeholder-rose-400 text-rose-900
                                       focus:ring-2 focus:ring-rose-300 focus:border-transparent
                                       transition-all duration-300 shadow-sm"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-rose-700 mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70
                                       placeholder-rose-400 text-rose-900
                                       focus:ring-2 focus:ring-rose-300 focus:border-transparent
                                       transition-all duration-300 shadow-sm"
                                placeholder="Choose a username"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-rose-700 mb-2">
                                Email Address
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

                        <div>
                            <label className="block text-sm font-semibold text-rose-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                                minLength="6"
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70
                                       placeholder-rose-400 text-rose-900
                                       focus:ring-2 focus:ring-rose-300 focus:border-transparent
                                       transition-all duration-300 shadow-sm"
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-rose-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-white/70
                                       placeholder-rose-400 text-rose-900
                                       focus:ring-2 focus:ring-rose-300 focus:border-transparent
                                       transition-all duration-300 shadow-sm"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-semibold text-white text-lg 
                                   shadow-lg transition-all duration-300
                                   ${loading
                                    ? "bg-rose-300 cursor-not-allowed"
                                    : "bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 hover:shadow-xl"
                                }`}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    {/* SIGN IN LINK */}
                    <div className="mt-6 text-center">
                        <p className="text-rose-700/80">
                            Already have an account?{" "}
                            <Link to="/login" className="font-semibold text-rose-600 hover:text-rose-800 transition">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* FOOTNOTE */}
                <div className="text-center mt-6 text-xs text-rose-600/70">
                    <p>By creating an account, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    );

};

export default RegisterPage;
