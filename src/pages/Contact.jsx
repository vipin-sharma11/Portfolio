import React from 'react';
import { Mail, Phone, MapPin, User, Hash } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary-accent/20 to-transparent blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-slate-300/20 to-transparent blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-12 animate-fadeIn">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-slideUp">
                    <div className="p-8 md:p-12">
                        <div className="grid gap-8">

                            {/* Name */}
                            <div className="flex items-start space-x-5 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                                <div className="p-3 bg-primary-accent/10 rounded-full text-primary-accent">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Name</h3>
                                    <p className="text-xl text-slate-800 font-medium">Vipin Sharma</p>
                                </div>
                            </div>

                            {/* USN */}
                            <div className="flex items-start space-x-5 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                    <Hash className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">USN</h3>
                                    <p className="text-xl text-slate-800 font-medium font-mono">01fe34bcs253</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-5 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</h3>
                                    <a href="mailto:01fe23bcs253@kletech.ac.in" className="text-xl text-slate-800 font-medium hover:text-primary-accent transition-colors">
                                        01fe23bcs253@kletech.ac.in
                                    </a>
                                </div>
                            </div>

                            {/* Location (Optional Placeholder) */}
                            <div className="flex items-start space-x-5 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                                <div className="p-3 bg-rose-100 rounded-full text-rose-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</h3>
                                    <p className="text-xl text-slate-800 font-medium">Hubballi, Karnataka, India</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Decorative Bar */}
                    <div className="h-2 bg-gradient-to-r from-slate-200 via-primary-accent to-slate-200"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
