import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-900">Vipin Sharma</h3>
                    <p className="text-slate-500 text-sm mt-1">
                        Building digital experiences.
                    </p>
                </div>

                <div className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Vipin Sharma. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
