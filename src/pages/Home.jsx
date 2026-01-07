import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-24 md:py-32 px-4 text-center">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight font-serif mb-6 opacity-95">
                        SOFTWARE <br className="md:hidden" /> ENGINEERING
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light mb-8">
                        Portfolio by Vipin Sharma
                    </p>
                </div>
            </div>

            {/* Portfolio Overview Section */}
            <div className="px-4 -mt-12 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wide decoration-primary-accent decoration-2 underline-offset-8">Portfolio Overview</h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                        I am an undergraduate engineering student interested in <strong className="font-semibold text-slate-800">web technologies</strong> and <strong className="font-semibold text-slate-800">software engineering</strong>.
                        This portfolio presents my academic coursework, hands-on assignments, and project work developed using modern web development tools.
                        It reflects my growing understanding of frontend and backend development, problem-solving approaches, and the practical application of software engineering principles.
                    </p>
                </div>
            </div>

            {/* Introduction / Quick Actions */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/projects" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition group shadow-md hover:shadow-lg">
                        View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center justify-center border border-slate-200 bg-white text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition shadow-sm hover:shadow-md">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-5xl mx-auto px-4 py-12 space-y-24">

            </div>
        </div>
    );
};

export default Home;
