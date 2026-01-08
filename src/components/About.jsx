import React from 'react';
import vipinPhoto from '../../P/vipin.jpg';
import { BookOpen, GraduationCap, Mail } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-8">
                {/* Photo & Basic Info */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 mb-6">
                        <img
                            src={vipinPhoto}
                            alt="Vipin Sharma"
                            className="w-full h-full object-cover rounded-full border-4 border-slate-50 shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full border border-slate-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">Vipin Sharma</h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-4 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">vipinsharma3711@gmail.com</span>
                    </div>
                </div>

                {/* Education */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 border-b border-gray-100 pb-2">
                        <GraduationCap className="w-5 h-5 text-indigo-600" />
                        Education
                    </h4>

                    <div className="space-y-6">
                        <div className="pl-4 border-l-2 border-indigo-100 relative">
                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-indigo-600"></div>
                            <h5 className="font-bold text-slate-900">Graduation</h5>
                            <p className="text-indigo-600 font-medium">KLE Technological University</p>
                            <p className="text-slate-500 text-sm mt-1">Undergraduate Engineering</p>
                        </div>

                        <div className="pl-4 border-l-2 border-indigo-100 relative">
                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-slate-300"></div>
                            <h5 className="font-bold text-slate-900">Primary & Secondary Education</h5>
                            <p className="text-indigo-600 font-medium">Army Public School Ambala Cantt</p>
                            <p className="text-slate-500 text-sm mt-1">CBSE Board</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Overview
                </h4>
                <p className="text-slate-600 leading-relaxed">
                    I am an undergraduate engineering student pursuing my studies with a focus on web technologies and software engineering.
                    My academic curriculum has provided me with a structured understanding of programming fundamentals, web application development,
                    and software engineering methodologies through coursework, laboratory sessions, and project-based learning.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    I am passionate about building scalable web applications and solving complex problems through code.
                    My journey has involved learning various technologies and applying them to real-world scenarios.
                </p>
            </div>
        </div>
    );
};

export default About;
