import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './components/Skills'
import About from './components/About'
import Assignments from './pages/Assignments'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-blue-50 font-sans text-gray-800 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={
                            <div className="min-h-screen pt-24 px-4 bg-slate-50">
                                <div className="max-w-4xl mx-auto space-y-16">
                                    <div>
                                        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">About Me</h1>
                                        <About />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technical Skills</h2>
                                        <Skills />
                                    </div>
                                </div>
                            </div>
                        } />
                        <Route path="/assignments" element={<Assignments />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<div className="pt-20 px-4 max-w-4xl mx-auto"><Skills /></div>} />
                        <Route path="*" element={<div className="pt-32 text-center text-xl text-gray-600">Page Under Construction</div>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
