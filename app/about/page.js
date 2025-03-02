import React from 'react';
import Navbar from '../components/Navbar';
import { School, FileText, Upload, Zap, Heart, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] min-h-screen text-gray-200">
      <Navbar />
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center justify-center mb-6">
          <School className="w-10 h-10 text-[#38BDF8] mr-3" />
          <h1 className="text-5xl font-bold text-white">About PaperNest</h1>
        </div>
        
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          PaperNest is a dedicated platform for NIT Srinagar students to easily access 
          previous year question papers and study materials. Our mission is to simplify 
          exam preparation by providing a well-organized and easy-to-navigate resource hub.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-[#1E293B] py-12">
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
          {[
            {icon: FileText, title: "Access Old Papers", description: "Browse and download previous year question papers from different branches and semesters. Organized by year, subject, and exam type for easy navigation." },
            {icon: Upload, title: "Upload Study Materials", description: "Contribute by uploading notes and papers for future students to use. Help build a comprehensive resource library for everyone." },
            {icon: Zap, title: "Fast & Mobile Friendly", description: "Our platform is optimized for fast performance and works seamlessly across all devices. Access your study materials anytime, anywhere." },
            {icon: Users, title: "Community Driven", description: "Join a community of students helping each other succeed. Share insights, tips, and resources with your peers." }
          ].map((feature, index) => (
            <div key={index} className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-gray-700 hover:border-[#38BDF8] transition-all">
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-[#38BDF8] mr-3" />
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-[#1E293B] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Journey</h2>
          
          <div className="space-y-8">
            {[
              {year: "2025", text: "PaperNest was founded by a group of NIT Srinagar students." },
              {year: "2026", text: "Planning to add interactive study guides and practice tests." }
            ].map((event, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-6">
                  <Calendar className="w-6 h-6 text-[#38BDF8]" />
                  {index !== 1 && <div className="h-full w-0.5 bg-[#38BDF8] mt-2"></div>}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{event.year}</h3>
                  <p className="text-gray-300 mt-1">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center py-10 bg-[#0F172A]">
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