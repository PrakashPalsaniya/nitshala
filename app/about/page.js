import React from 'react';
import Navbar from '../components/Navbar';
import { School, FileText, Upload, Zap, Heart, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
   
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-gray-200">
         <Navbar/>
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center justify-center mb-6">
          <School className="w-10 h-10 text-blue-400 mr-3" />
          <h1 className="text-5xl font-bold text-white">About PaperNest</h1>
        </div>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          PaperNest is a dedicated platform for NIT Srinagar students to easily access 
          previous year question papers and study materials. Our mission is to simplify 
          exam preparation by providing a well-organized and easy-to-navigate resource hub.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center">
            We believe that access to quality study materials should be easy and free.
            PaperNest was created by students, for students, to level the playing field
            and help everyone achieve academic success.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What We Offer</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Access Old Papers</h3>
            </div>
            <p className="text-gray-300">
              Browse and download previous year question papers from different branches and semesters.
              Organized by year, subject, and exam type for easy navigation.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Upload className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Upload Study Materials</h3>
            </div>
            <p className="text-gray-300">
              Contribute by uploading notes and papers for future students to use.
              Help build a comprehensive resource library for everyone.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Fast & Mobile Friendly</h3>
            </div>
            <p className="text-gray-300">
              Our platform is optimized for fast performance and works seamlessly across all devices.
              Access your study materials anytime, anywhere.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Community Driven</h3>
            </div>
            <p className="text-gray-300">
              Join a community of students helping each other succeed.
              Share insights, tips, and resources with your peers.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Journey</h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <Calendar className="w-6 h-6 text-blue-400" />
                <div className="h-full w-0.5 bg-blue-400 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">2023</h3>
                <p className="text-gray-300 mt-1">PaperNest was founded by a group of NIT Srinagar students</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <Calendar className="w-6 h-6 text-blue-400" />
                <div className="h-full w-0.5 bg-blue-400 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">2024</h3>
                <p className="text-gray-300 mt-1">Expanded our collection to cover all departments and semesters</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">2025</h3>
                <p className="text-gray-300 mt-1">Planning to add interactive study guides and practice tests</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center py-10 bg-gray-900">
        <div className="flex items-center justify-center mb-3">
          <Heart className="w-5 h-5 text-red-500 mr-2" />
          <p className="text-gray-400">Made with love for NIT Srinagar students</p>
        </div>
        <p className="text-gray-500">© 2025 PaperNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;