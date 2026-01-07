import React, { useState } from 'react';
import { Code, Layout, Server, Database, FileCode } from 'lucide-react';

const Assignments = () => {
    const [activeTab, setActiveTab] = useState('html-css');

    const tabs = [
        { id: 'html-css', label: 'HTML & CSS Assignment', icon: Layout },
        { id: 'js', label: 'Javascript Assignment', icon: Code },
        { id: 'node', label: 'Node.js Assignment', icon: Server },
        { id: 'react', label: 'React.js Assignment', icon: FileCode },
        { id: 'mern', label: 'MERN Stack Assignment', icon: Database },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'html-css':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Assignment 1: HTML & CSS</h3>
                            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <p className="text-slate-600 font-medium mb-1">Source Code Repository</p>
                                    <p className="text-sm text-slate-500">View the complete source code and documentation on GitHub.</p>
                                </div>
                                <a
                                    href="https://github.com/Keysics/Assignments/tree/main/Assignment_1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'js':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Assignment 2: Javascript</h3>
                            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <p className="text-slate-600 font-medium mb-1">Source Code Repository</p>
                                    <p className="text-sm text-slate-500">View the complete source code and documentation on GitHub.</p>
                                </div>
                                <a
                                    href="https://github.com/Keysics/Assignments/tree/main/Assignment_2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'node':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Assignment 3: Node.js & Express</h3>
                            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <p className="text-slate-600 font-medium mb-1">Source Code Repository</p>
                                    <p className="text-sm text-slate-500">View the complete source code and documentation on GitHub.</p>
                                </div>
                                <a
                                    href="https://github.com/Keysics/Assignments/tree/main/Assignment_3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'react':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Assignment 4: React</h3>
                            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <p className="text-slate-600 font-medium mb-1">Source Code Repository</p>
                                    <p className="text-sm text-slate-500">View the complete source code and documentation on GitHub.</p>
                                </div>
                                <a
                                    href="https://github.com/Keysics/Assignments/tree/main/Assignment_4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'mern':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Assignment 5: MERN Stack</h3>
                            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <p className="text-slate-600 font-medium mb-1">Source Code Repository</p>
                                    <p className="text-sm text-slate-500">View the complete source code and documentation on GitHub.</p>
                                </div>
                                <a
                                    href="https://github.com/Keysics/Assignments/tree/main/Assignment_5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-8 md:py-16 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center md:text-left border-b border-gray-200 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Assignments</h1>
                    <p className="text-xl text-slate-500 max-w-2xl">
                        A collection of coursework and practical assignments covering various web technologies.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-1/4">
                        <nav className="flex flex-col space-y-2 sticky top-24 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-all duration-200 font-medium ${activeTab === tab.id
                                            ? 'bg-slate-900 text-white shadow-md transform scale-[1.02]'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-primary-accent'
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 mr-3 ${activeTab === tab.id ? 'text-primary-accent' : 'text-slate-400'}`} />
                                        <span className="text-sm">{tab.label}</span>
                                    </button>
                                )
                            })}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:w-3/4">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Assignments;
