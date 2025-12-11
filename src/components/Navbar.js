// import React, { useContext, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     setIsMenuOpen(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               RoadVenture
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`font-medium transition-colors duration-200 ${
//                 isActive('/') 
//                   ? 'text-blue-600' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/trips"
//               className={`font-medium transition-colors duration-200 ${
//                 isActive('/trips') 
//                   ? 'text-blue-600' 
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               Explore
//             </Link>

//             {auth.isAuthenticated && (
//               <>
//                 <Link
//                   to="/mytrips"
//                   className={`font-medium transition-colors duration-200 ${
//                     isActive('/mytrips') 
//                       ? 'text-blue-600' 
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   My Trips
//                 </Link>
//                 <Link
//                   to="/create-trip"
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
//                 >
//                   Create Trip
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {auth.isAuthenticated ? (
//               <div className="flex items-center space-x-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                   <span className="text-white font-medium text-sm">
//                     {auth.user?.name?.charAt(0).toUpperCase() || '👤'}
//                   </span>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={`block font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/trips"
//               onClick={() => setIsMenuOpen(false)}
//               className={`block font-medium ${isActive('/trips') ? 'text-blue-600' : 'text-gray-700'}`}
//             >
//               Explore
//             </Link>

//             {auth.isAuthenticated ? (
//               <>
//                 <Link
//                   to="/mytrips"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`block font-medium ${isActive('/mytrips') ? 'text-blue-600' : 'text-gray-700'}`}
//                 >
//                   My Trips
//                 </Link>
//                 <Link
//                   to="/create-trip"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center"
//                 >
//                   Create Trip
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left font-medium text-red-600"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block font-medium text-gray-700"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useContext, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     setIsMenuOpen(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-pink-50/70 backdrop-blur-xl border-b border-rose-200/40 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center shadow-md">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
//               RoadVenture
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`font-medium transition-colors duration-200 ${
//                 isActive('/') 
//                   ? 'text-rose-600 font-semibold' 
//                   : 'text-rose-700/80 hover:text-rose-600'
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/trips"
//               className={`font-medium transition-colors duration-200 ${
//                 isActive('/trips') 
//                   ? 'text-rose-600 font-semibold' 
//                   : 'text-rose-700/80 hover:text-rose-600'
//               }`}
//             >
//               Explore
//             </Link>

//             {auth.isAuthenticated && (
//               <>
//                 <Link
//                   to="/mytrips"
//                   className={`font-medium transition-colors duration-200 ${
//                     isActive('/mytrips') 
//                       ? 'text-rose-600 font-semibold' 
//                       : 'text-rose-700/80 hover:text-rose-600'
//                   }`}
//                 >
//                   My Trips
//                 </Link>

//                 {/* Create Trip Button */}
//                 <Link
//                   to="/create-trip"
//                   className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
//                 >
//                   Create Trip
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {auth.isAuthenticated ? (
//               <div className="flex items-center space-x-4">

//                 {/* User Icon */}
//                 <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow">
//                   <span className="text-white font-medium text-sm">
//                     {auth.user?.name?.charAt(0).toUpperCase() || '👤'}
//                   </span>
//                 </div>

//                 <button
//                   onClick={handleLogout}
//                   className="text-rose-700/80 hover:text-red-600 font-medium transition-colors duration-200"
//                 >
//                   Logout
//                 </button>

//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="/login"
//                   className="text-rose-700/80 hover:text-rose-600 font-medium transition-colors duration-200"
//                 >
//                   Login
//                 </Link>

//                 {/* Sign Up Button */}
//                 <Link
//                   to="/register"
//                   className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-rose-700 hover:text-rose-500 transition-colors duration-200"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={`block font-medium ${
//                 isActive('/') ? 'text-rose-600' : 'text-rose-700/80'
//               }`}
//             >
//               Home
//             </Link>

//             <Link
//               to="/trips"
//               onClick={() => setIsMenuOpen(false)}
//               className={`block font-medium ${
//                 isActive('/trips') ? 'text-rose-600' : 'text-rose-700/80'
//               }`}
//             >
//               Explore
//             </Link>

//             {auth.isAuthenticated ? (
//               <>
//                 <Link
//                   to="/mytrips"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`block font-medium ${
//                     isActive('/mytrips') ? 'text-rose-600' : 'text-rose-700/80'
//                   }`}
//                 >
//                   My Trips
//                 </Link>

//                 <Link
//                   to="/create-trip"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-lg font-medium text-center shadow-md"
//                 >
//                   Create Trip
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left font-medium text-red-600"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block font-medium text-rose-700/80"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-lg font-medium text-center shadow-md"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         )}

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-rose-600 font-semibold"
      : "text-rose-700/80 hover:text-rose-600";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-pink-200/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-r from-pink-300 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent tracking-tight">
              PathFinder
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">

            <Link to="/" className={`relative group ${isActive("/")}`}>
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/trips" className={`relative group ${isActive("/trips")}`}>
              Explore
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {auth.isAuthenticated && (
              <>
                <Link
                  to="/mytrips"
                  className={`relative group ${isActive("/mytrips")}`}
                >
                  My Trips
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  to="/create-trip"
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:shadow-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105"
                >
                  Create Trip
                </Link>
              </>
            )}
          </div>

          {/* AUTH (DESKTOP) */}
          <div className="hidden md:flex items-center space-x-5">
            {auth.isAuthenticated ? (
              <div className="flex items-center space-x-3">

                {/* User Icon */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center shadow-md">
                  {auth.user?.name?.charAt(0).toUpperCase()}
                </div>

                <button
                  onClick={handleLogout}
                  className="text-rose-700/80 hover:text-red-600 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-rose-700/80 hover:text-rose-600 font-medium transition-colors"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:from-pink-500 hover:to-rose-500 transition-all duration-300 hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-rose-700 hover:text-rose-500 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-5 space-y-4">
            
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium ${isActive("/")}`}
            >
              Home
            </Link>

            <Link
              to="/trips"
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium ${isActive("/trips")}`}
            >
              Explore
            </Link>

            {auth.isAuthenticated ? (
              <>
                <Link
                  to="/mytrips"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-medium ${isActive("/mytrips")}`}
                >
                  My Trips
                </Link>

                <Link
                  to="/create-trip"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-xl text-center font-medium shadow-md"
                >
                  Create Trip
                </Link>

                <button
                  onClick={handleLogout}
                  className="block font-medium text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium text-rose-700/80"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-xl text-center font-medium shadow-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

