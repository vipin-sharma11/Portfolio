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
                    {/* 
                        TODO: REPLACE THE SRC URL BELOW WITH YOUR ACTUAL GOOGLE FORM EMBED LINK 
                        1. Go to your Google Form -> Send -> <> (Embed HTML)
                        2. Copy the URL from the 'src' attribute
                        3. Paste it below
                    */}
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfq5PZ3kD5FiIEsVTozOFgNjsN-KtjBasfZaYKe78DpPityNA/viewform?embedded=true"
                        className="w-full h-[1200px] md:h-[1500px] border-none"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
