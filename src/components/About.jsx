import React from 'react';

const About = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">About Me</h2>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <h3 className="text-lg font-semibold text-slate-800">Academic Background</h3>
                <p>
                    I am an undergraduate engineering student pursuing my studies with a focus on web technologies and software engineering.
                    My academic curriculum has provided me with a structured understanding of programming fundamentals, web application development,
                    and software engineering methodologies through coursework, laboratory sessions, and project-based learning.
                </p>
                <p>
                    I am passionate about building scalable web applications and solving complex problems through code.
                    My journey has involved learning various technologies and applying them to real-world scenarios.
                </p>
            </div>
        </div>
    );
};

export default About;
