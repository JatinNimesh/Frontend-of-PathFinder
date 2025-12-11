// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Hero Section */}
//       <div className="relative min-h-screen flex items-center justify-center">
//         {/* Background Video or Image */}
//         <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             loop
//             muted
//             className="w-full h-full object-cover"
//             style={{ filter: 'brightness(0.7)' }}
//           >
//             <source src="/background-video.mp4" type="video/mp4" />
//             {/* Fallback gradient background */}
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//             Your Next
//             <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Adventure
//             </span>
//             Awaits
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Discover breathtaking routes, plan unforgettable journeys, and connect with fellow travelers from around the world.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Link
//               to="/trips"
//               className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
//             >
//               Explore Trips
//               <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//             <Link
//               to="/register"
//               className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
//             >
//               Start Your Journey
//             </Link>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//           <div className="animate-bounce">
//             <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose RoadVenture?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We provide everything you need to plan, share, and experience incredible road trips.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {/* Feature 1 */}
//             <div className="group text-center">
//               <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Routes</h3>
//               <p className="text-gray-600">
//                 Plan your journey with detailed maps, real-time weather updates, and discover amazing attractions along your route.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="group text-center">
//               <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel Community</h3>
//               <p className="text-gray-600">
//                 Connect with fellow travelers, share experiences, and get inspired by amazing journeys from around the world.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="group text-center">
//               <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Memories</h3>
//               <p className="text-gray-600">
//                 Create beautiful trip albums, write reviews, and preserve your travel memories in a stunning visual format.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready for Your Next Adventure?
//           </h2>
//           <p className="text-xl text-blue-100 mb-10">
//             Join thousands of travelers who have already discovered their perfect road trip with RoadVenture.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Link
//               to="/register"
//               className="bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-2xl"
//             >
//               Get Started Free
//             </Link>
//             <Link
//               to="/trips"
//               className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
//             >
//               Browse Trips
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden font-sans bg-[#FFF7FA]">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover -z-10"
            style={{ filter: 'brightness(0.75)' }}
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>

          {/* Soft Pink Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200/60 via-pink-100/40 to-purple-200/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-700 drop-shadow-lg mb-8 leading-tight tracking-tight">
            The Journey of a
            <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              Lifetime Begins
            </span>
            Here
          </h1>

          <p className="text-xl md:text-2xl text-rose-900/80 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover beautiful routes, craft perfect journeys, and experience travel in a new way.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Primary Button */}
            {/* <Link
              to="/trips"
              className="group bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold tracking-wide shadow-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
            >
              Explore Trips
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link> */}
            <Link
              to="/trips"
              className="group bg-rose-500 text-white px-10 py-4 rounded-xl text-lg font-semibold 
             shadow-lg hover:bg-rose-600 transition-all duration-300 flex items-center gap-3"
            >
              Explore Trips
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>



            {/* Secondary Button */}
            {/* <Link
              to="/register"
              className="group bg-white/40 backdrop-blur-md text-rose-700 px-8 py-4 rounded-2xl text-lg font-semibold tracking-wide border border-rose-200 hover:bg-white/60 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-md"
            >
              Start Your Journey
            </Link> */}

            <Link
              to="/register"
              className="group bg-white/40 backdrop-blur-md text-rose-700 px-8 py-4 
             rounded-2xl text-lg font-semibold tracking-wide border border-rose-200 
             hover:bg-white/60 transition-all duration-300 transform hover:scale-105 
             inline-flex items-center justify-center shadow-md"
            >
              Start you Journey
            </Link>



          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-rose-700/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-rose-700 mb-6 tracking-tight">
              Why Choose PathFinder?
            </h2>
            <p className="text-xl text-rose-600/80 max-w-3xl mx-auto leading-relaxed">
              We help you plan road trips that turn every mile into a memory.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Feature 1 */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-rose-700 mb-4">Smart Route Planning</h3>
              <p className="text-rose-600/80 leading-relaxed">
                Uncover beautiful journeys supported by smart maps and special destinations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0 -.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-rose-700 mb-4">Travel Social Space</h3>
              <p className="text-rose-600/80 leading-relaxed">
               Share stories, find inspiration, and explore together.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l .812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l .812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-rose-700 mb-4">Capture Memories</h3>
              <p className="text-rose-600/80 leading-relaxed">
               Capture your best moments in a beautiful visual style.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-pink-300 to-rose-300">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl md:text-5xl font-extrabold text-rose-700 drop-shadow-lg mb-6">
            Excited for Your Next Journey?
          </h2>

          <p className="text-xl text-rose-700/80 mb-10 leading-relaxed">
            Start exploring and build moments that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Link
              to="/register"
              className="bg-white text-rose-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Adventure
            </Link>

            <Link
              to="/trips"
              className="bg-white/50 backdrop-blur-md text-rose-700 px-8 py-4 rounded-2xl text-lg font-semibold border border-rose-200 hover:bg-white/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Trips
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
};

export default HomePage;
