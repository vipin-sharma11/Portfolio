import React, { useState } from 'react';
import { Layout, CheckCircle2, Target, Users, Server, Code2, BookOpen, UserCheck } from 'lucide-react';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('details');

    const tabs = [
        { id: 'details', label: 'Course Project Details', icon: Layout },
        { id: 'problem', label: 'Problem Analysis And Requirement', icon: Target },
        { id: 'design', label: 'System Design', icon: Server },
        { id: 'implementation', label: 'Implementation', icon: Code2 },
        { id: 'devops', label: 'Devops Certification', icon: UserCheck },
        { id: 'reflection', label: 'Final Reflection', icon: BookOpen },
    ];

    const teamMembers = [
        { name: "Ananya V H", usn: "01fe23bcs104", roll: "443" },
        { name: "Vipin Sharma", usn: "01fe23bcs253", roll: "440" },
        { name: "Praman Chakravarty", usn: "01fe23bcs246", roll: "439" },
        { name: "Pramod", usn: "01fe21bcs056", roll: "462" },
        { name: "Sohan Kallur", usn: "01fe23bcs020", roll: "461" },
        { name: "Rithika Patil", usn: "01fe23bcs031", roll: "437" },
        { name: "Spoorthi Hiremath", usn: "01fe23bcs251", roll: "439" },
        { name: "Rakshita S Gamanagatti", usn: "01fe24bcs410", roll: "460" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'details':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Header Info */}
                        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-3xl font-bold mb-2">Sports Scheduler System</h2>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-slate-300">
                                <span className="font-mono text-primary-accent font-semibold">Course Code: 25ECSC301</span>
                                <div>
                                    <span className="font-semibold text-slate-400 mr-2">Guide:</span>
                                    Dr P.G Sunita Hiremath, Neha T
                                </div>
                            </div>
                        </div>

                        {/* Problem Statement */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Problem Statement</h3>
                            <p className="text-slate-600 leading-relaxed">
                                The manual booking of sports facilities such as arenas, gymkhana slots, and sports grounds often leads to scheduling conflicts, duplicate reservations, and inefficient utilization of resources. At KLE Technological University, the absence of a centralized digital platform makes it difficult to track real-time availability, manage bookings transparently, and ensure fair access to sports facilities. Therefore, there is a need for a reliable, automated system that provides accurate scheduling and eliminates time-slot conflicts while improving overall accessibility and management efficiency.
                            </p>
                        </div>

                        {/* Objectives & Motivation */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Objectives and Motivation</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                                <li>Design and implement a web-based sports facility scheduling and booking system.</li>
                                <li>Provide real-time availability of sports facilities.</li>
                                <li>Prevent duplicate bookings and scheduling conflicts.</li>
                                <li>Automate booking confirmations and notifications.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed italic border-l-4 border-primary-accent pl-4 bg-slate-50 py-2 pr-2">
                                "The motivation behind this project is to replace the existing manual or semi-manual booking process with a fast, transparent, and user-friendly digital solution. By adopting modern web technologies and software engineering practices, the system aims to enhance operational efficiency, improve user experience, and ensure fair and organized access to sports facilities."
                            </p>
                        </div>

                        {/* Target Users & Tech Stack */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Target Users</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><span className="font-semibold text-slate-800 w-1/3">Students:</span> <span className="text-slate-600 w-2/3">Book facilities with real-time availability.</span></li>
                                    <li className="flex items-start"><span className="font-semibold text-slate-800 w-1/3">Faculty & Staff:</span> <span className="text-slate-600 w-2/3">Reserve facilities for official activities.</span></li>
                                    <li className="flex items-start"><span className="font-semibold text-slate-800 w-1/3">Sports Admins:</span> <span className="text-slate-600 w-2/3">Manage facilities and schedules.</span></li>
                                    <li className="flex items-start"><span className="font-semibold text-slate-800 w-1/3">System Admins:</span> <span className="text-slate-600 w-2/3">Handle roles and maintenance.</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies Used</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Frontend</span>
                                        <div className="flex flex-wrap gap-2 mt-1"><span className="tag">HTML5</span><span className="tag">CSS3</span><span className="tag">JavaScript</span></div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Backend</span>
                                        <div className="flex flex-wrap gap-2 mt-1"><span className="tag">Node.js</span><span className="tag">Express.js</span></div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Database</span>
                                        <div className="flex flex-wrap gap-2 mt-1"><span className="tag">MongoDB</span></div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Services & Security</span>
                                        <div className="flex flex-wrap gap-2 mt-1"><span className="tag">Email/SMS APIs</span><span className="tag">Role-Based Access</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Members Table */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-slate-900">Team Members</h3>
                                <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Team D2-1</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100 text-slate-500 text-sm uppercase tracking-wider">
                                            <th className="py-3 px-4">Name</th>
                                            <th className="py-3 px-4">USN</th>
                                            <th className="py-3 px-4">Roll No</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        {teamMembers.map((member, index) => (
                                            <tr key={index} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                                                <td className={`py-3 px-4 font-medium ${member.name === "Vipin Sharma" ? "text-primary-accent" : ""}`}>{member.name}</td>
                                                <td className="py-3 px-4 font-mono text-sm text-slate-500">{member.usn}</td>
                                                <td className="py-3 px-4">{member.roll}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 'problem':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Sprint 1</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                                            <th className="p-3 border border-slate-200">ID</th>
                                            <th className="p-3 border border-slate-200 w-1/3">User Story</th>
                                            <th className="p-3 border border-slate-200">Story Points</th>
                                            <th className="p-3 border border-slate-200 w-1/3">Acceptance Criteria</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        {[
                                            { id: "US 01", story: "As a Student/Faculty/PD,\nI want to log in securely,\nso that I can access my personalized dashboard.", sp: "5 SP", criteria: "Login form validates credentials.\nIncorrect password shows error.\nSuccessful login redirects to correct role dashboard.\nSession maintained." },
                                            { id: "US 02", story: "As a User,\nI want to view upcoming sports events,\nso that I stay informed about college sports activities.", sp: "3 SP", criteria: "Event list loads with title/date/time.\nNo missing/incorrect event data.\nPage loads under 2 seconds." },
                                            { id: "US 03", story: "As a User,\nI want to view all available slots for a selected facility,\nso I can choose a time to book.", sp: "5 SP", criteria: "Slot list loads based on facility.\nShows date, start/end time, status.\nReal-time availability shown." },
                                            { id: "US 04", story: "As a User,\nI want to book a slot,\nso that I can reserve a facility for myself.", sp: "8 SP", criteria: "User can book only 1 slot/day.\nIf already booked → button disabled.\nSuccessful booking shows confirmation.\nSlot status changes to Booked in DB." },
                                            { id: "US 05", story: "As a Student/Faculty/PD,\nI want to access my dashboard,\nso that I can quickly see events, slots, and booking options.", sp: "3 SP", criteria: "Dashboard loads role-specific features.\nWorking links to Events, Facilities, Slots, Booking.\nNo broken sections or UI errors." }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50">
                                                <td className="p-3 border border-slate-200 font-mono">{row.id}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line">{row.story}</td>
                                                <td className="p-3 border border-slate-200 font-semibold text-center">{row.sp}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line text-slate-600">{row.criteria}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Sprint 2</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                                            <th className="p-3 border border-slate-200">ID</th>
                                            <th className="p-3 border border-slate-200 w-1/3">User Story</th>
                                            <th className="p-3 border border-slate-200">Story Points</th>
                                            <th className="p-3 border border-slate-200 w-1/3">Acceptance Criteria</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        {[
                                            { id: "US 06", story: "As an Admin,\nI want to log in securely,\nso that I can access the admin dashboard.", sp: "5 SP", criteria: "Admin credentials validated.\nIncorrect login shows error message.\nSuccessful login → Admin Dashboard.\nSession stored securely." },
                                            { id: "US 07", story: "As an Admin,\nI want to manage permissions for all roles,\nso that users only access allowed features.", sp: "8 SP", criteria: "Role permissions displayed and editable.\nStudents/Faculty/PD cannot access admin pages.\nUnauthorized URLs blocked.\nPermissions update stored in DB." },
                                            { id: "US 08", story: "As an Admin,\nI want to add, edit, and remove facilities,\nso that sports areas remain up to date.", sp: "5 SP", criteria: "Facility add/edit/delete forms working.\nNo duplicate facility names.\nConfirmation message shown.\nUpdated data reflected instantly." },
                                            { id: "US 09", story: "As an Admin,\nI want to create and manage time slots,\nso that users can book without conflicts.", sp: "8 SP", criteria: "Create/edit/delete slot options working.\nNo overlapping time slots allowed.\nDB updated instantly.\nSlot status visible (Available/Booked)." },
                                            { id: "US 10", story: "As an Admin,\nI want to view, approve, or cancel user bookings,\nso I can manage facility usage.", sp: "5 SP", criteria: "Booking list loads with user & slot info.\nAdmin can cancel any booking.\nStatus changes reflected in DB.\nConfirmation message displayed." }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50">
                                                <td className="p-3 border border-slate-200 font-mono">{row.id}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line">{row.story}</td>
                                                <td className="p-3 border border-slate-200 font-semibold text-center">{row.sp}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line text-slate-600">{row.criteria}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Sprint 3</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                                            <th className="p-3 border border-slate-200">ID</th>
                                            <th className="p-3 border border-slate-200 w-1/3">User Story</th>
                                            <th className="p-3 border border-slate-200">Story Points</th>
                                            <th className="p-3 border border-slate-200 w-1/3">Acceptance Criteria</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        {[
                                            { id: "US 11", story: "As a User,\nI want the backend to fetch real-time slot availability,\nso I always see accurate data before booking.", sp: "8 SP", criteria: "API returns correct availability.\nUpdates reflect instantly after booking/cancel.\nNo caching errors." },
                                            { id: "US 12", story: "As a User,\nI want the backend to enforce booking rules,\nso misuse is prevented.", sp: "5 SP", criteria: "Backend blocks second booking attempt.\nSame-day booking disabled.\nProper error message returned." },
                                            { id: "US 13", story: "As an Admin/Developer,\nI want to perform response time testing,\nso the system meets performance targets.", sp: "5 SP", criteria: "All APIs respond in < 2 seconds.\nLoad testing done with multiple users.\nNo API timeouts under peak load." },
                                            { id: "US 14", story: "As a Developer/Admin,\nI want the system to support scalability,\nso it can handle more users without slowing.", sp: "8 SP", criteria: "Backend tested for high traffic.\nDatabase optimized with indexing.\nServer handles concurrent requests.\nNo performance degradation." },
                                            { id: "US 15", story: "As an Admin,\nI want the system to be tested and deployed,\nso all users can access it smoothly.", sp: "8 SP", criteria: "All unit and integration tests pass.\nBackend deployed to cloud/server.\nBooking, login, slots working live.\nStable uptime after deployment." }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50">
                                                <td className="p-3 border border-slate-200 font-mono">{row.id}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line">{row.story}</td>
                                                <td className="p-3 border border-slate-200 font-semibold text-center">{row.sp}</td>
                                                <td className="p-3 border border-slate-200 whitespace-pre-line text-slate-600">{row.criteria}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Scrum Roles */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Scrum Roles</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                                            <th className="p-3 border border-slate-200 w-1/4">Team Members</th>
                                            <th className="p-3 border border-slate-200 w-1/4">Role</th>
                                            <th className="p-3 border border-slate-200">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        {[
                                            { members: "Ananya", role: "Scrum Master", desc: "Facilitates the Scrum process, coordinates team activities, and removes development obstacles." },
                                            { members: "Rakshita, Spoorti, Pramod", role: "Front-End Developers", desc: "Design and develop the user interface using HTML, CSS, and JavaScript to ensure a responsive and user-friendly experience." },
                                            { members: "Vipin, Praman, Rithika", role: "Back-End Developers", desc: "Handle server-side logic, manage data flow between client and server, and ensure secure and reliable functionality." },
                                            { members: "Sohan, Ananya", role: "Database Engineers", desc: "Design, implement, and maintain the database while ensuring data integrity, security, and efficient data retrieval." }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50">
                                                <td className="p-3 border border-slate-200 font-semibold">{row.members}</td>
                                                <td className="p-3 border border-slate-200 text-primary-accent font-medium">{row.role}</td>
                                                <td className="p-3 border border-slate-200 text-slate-600">{row.desc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Requirements Specification */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Functional Requirements</h3>
                                <ul className="space-y-4 text-slate-700">
                                    {[
                                        { title: "User Registration & Authentication", desc: "Allows users to create an account and log in securely." },
                                        { title: "Facility Search & Filter", desc: "Search by location, sport type, date, and time." },
                                        { title: "Real-time Availability", desc: "Display real-time slots for selected facilities." },
                                        { title: "Slot Booking", desc: "Select available slots and book for specific duration." },
                                        { title: "Booking Management", desc: "View history, modify or cancel upcoming reservations." },
                                        { title: "Automated Notifications", desc: "Email/SMS confirmations and reminders." },
                                        { title: "Fair Access Control", desc: "Limit bookings to one per day, next-day booking rule." }
                                    ].map((req, i) => (
                                        <li key={i}>
                                            <span className="font-bold block text-slate-800">{req.title}:</span>
                                            <span className="text-sm text-slate-600">{req.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Non-Functional Requirements</h3>
                                <ul className="space-y-4 text-slate-700">
                                    {[
                                        { title: "Performance", desc: "Key actions complete within 2 seconds." },
                                        { title: "Security", desc: "Strong encryption for sensitive data." },
                                        { title: "Usability", desc: "Simple, intuitive interface." },
                                        { title: "Availability", desc: "24/7 access with reliable backup." },
                                        { title: "Scalability", desc: "Handle user growth without degradation." }
                                    ].map((req, i) => (
                                        <li key={i}>
                                            <span className="font-bold block text-slate-800">{req.title}:</span>
                                            <span className="text-sm text-slate-600">{req.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Use Case Diagram Placeholders */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Use Case Diagram</h3>
                            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
                                <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2 transition-all hover:shadow-lg hover:border-primary-accent/50">
                                    <div className="aspect-[4/3] bg-white relative overflow-hidden rounded-lg">
                                        <img
                                            src="/assets/diagrams/UC1.png"
                                            alt="Use Case Diagram 1"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-3 text-center border-t border-slate-100 mt-2">
                                        <span className="font-medium text-slate-700">Use Case Diagram 1</span>
                                    </div>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2 transition-all hover:shadow-lg hover:border-primary-accent/50">
                                    <div className="aspect-[4/3] bg-white relative overflow-hidden rounded-lg">
                                        <img
                                            src="/assets/diagrams/UC2.png"
                                            alt="Use Case Diagram 2"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-3 text-center border-t border-slate-100 mt-2">
                                        <span className="font-medium text-slate-700">Use Case Diagram 2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'design':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Activity Diagram */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">ACTIVITY DIAGRAM</h3>
                            <div className="max-w-4xl mx-auto group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2 transition-all hover:shadow-lg hover:border-primary-accent/50">
                                <div className="aspect-auto bg-white relative overflow-hidden rounded-lg flex justify-center bg-slate-100/50">
                                    <img
                                        src="/assets/diagrams/activity_diagram.png"
                                        alt="Activity Diagram"
                                        className="h-[60vh] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="p-3 text-center border-t border-slate-100 mt-2">
                                    <span className="font-medium text-slate-700">Activity Diagram</span>
                                </div>
                            </div>
                        </div>

                        {/* Sequence Diagram */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">SEQUENCE DIAGRAM</h3>
                            <div className="max-w-4xl mx-auto group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2 transition-all hover:shadow-lg hover:border-primary-accent/50">
                                <div className="aspect-auto bg-white relative overflow-hidden rounded-lg flex justify-center bg-slate-100/50">
                                    <img
                                        src="/assets/diagrams/sequence_diagram.png"
                                        alt="Sequence Diagram"
                                        className="h-[60vh] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="p-3 text-center border-t border-slate-100 mt-2">
                                    <span className="font-medium text-slate-700">Sequence Diagram</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'implementation':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Implementation</h3>
                            <p className="text-slate-600 mb-8 max-w-2xl">
                                Snapshots of the Sports Scheduler System in action, showcasing the user interface, booking flow, and administrative dashboards.
                            </p>

                            <div className="grid grid-cols-1 gap-8">
                                {[2, 3, 4, 5, 6].map((num, index) => (
                                    <div key={num} className="group relative overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:border-primary-accent/50 cursor-pointer">
                                        <div className="aspect-video bg-slate-100 relative">
                                            {/* Using standard img tag since we moved assets to public folder */}
                                            <img
                                                src={`/assets/project/${num}.jpeg`}
                                                alt={`Project Screenshot ${index + 1}`}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; // Fallback
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                                        </div>
                                        <div className="p-4 bg-white">
                                            <span className="text-sm font-medium text-slate-500 group-hover:text-primary-accent transition-colors">Screenshot {index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'devops':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">DevOps Certification</h3>
                            <p className="text-slate-600 mb-8 max-w-2xl">
                                Certifications earned during the course of the project, demonstrating proficiency in DevOps practices and tools.
                            </p>

                            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
                                <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2">
                                    <div className="aspect-[4/3] bg-white relative overflow-hidden rounded-lg">
                                        <img
                                            src="/assets/certificates/certificate1.png"
                                            alt="DevOps Certificate 1"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <span className="font-semibold text-slate-700">Certificate 1</span>
                                    </div>
                                </div>
                                <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2">
                                    <div className="aspect-[4/3] bg-white relative overflow-hidden rounded-lg">
                                        <img
                                            src="/assets/certificates/certificate2.png"
                                            alt="DevOps Certificate 2"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <span className="font-semibold text-slate-700">Certificate 2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'reflection':
                return (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Final Reflection</h3>
                            <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-100">
                                <p className="text-slate-700 leading-relaxed italic">
                                    "This integrated course project was a significant milestone in my journey as a software engineer. It bridged the gap between theoretical concepts and real-world application, challenging me to think critically about system architecture, user experience, and efficient code implementation."
                                </p>
                            </div>

                            <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Takeaways & Learnings</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1 mr-4 font-bold text-sm">1</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Agile Methodology & Scrum</span>
                                        <p className="text-slate-600 text-sm">Adopting the Agile framework allowed us to break down complex requirements into manageable sprints. Regular stand-ups and role clarity (Scrum Master, Devs) improved our team velocity and adaptability.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1 mr-4 font-bold text-sm">2</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Full-Stack Integration Mastery</span>
                                        <p className="text-slate-600 text-sm">Seamlessly connecting the React frontend with the Node.js/Express backend taught me the nuances of API design, data flow, and handling asynchronous operations effectively.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1 mr-4 font-bold text-sm">3</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Importance of System Design</span>
                                        <p className="text-slate-600 text-sm">Creating detailed Use Case, Activity, and Sequence diagrams prior to coding proved invaluable. It eliminated ambiguity and provided a clear roadmap for implementation, saving significant development time.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-1 mr-4 font-bold text-sm">4</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Modern UI/UX with Tailwind</span>
                                        <p className="text-slate-600 text-sm">Moving beyond basic CSS to utility-first styling with Tailwind allowed for rapid UI development. I learned to balance aesthetics with functionality, ensuring the interface was both beautiful and responsive.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mt-1 mr-4 font-bold text-sm">5</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Effective Team Collaboration</span>
                                        <p className="text-slate-600 text-sm">Working in a diverse team emphasized the importance of clear communication, version control (Git), and conflict resolution. We leveraged each member's strengths to deliver a cohesive product.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 mt-1 mr-4 font-bold text-sm">6</div>
                                    <div>
                                        <span className="block font-semibold text-slate-800 mb-1">Problem Solving & Debugging</span>
                                        <p className="text-slate-600 text-sm">Encountering and verifying bugs during the testing phase sharpened my debugging skills. I learned to systematically trace errors from the frontend UI down to database queries.</p>
                                    </div>
                                </li>
                            </ul>
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
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Integrated Course Project</h1>
                    <p className="text-xl text-slate-500 max-w-2xl">
                        Comprehensive documentation of the Sports Scheduler System, detailing the journey from problem analysis to final deployment.
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
            {/* Simple CSS for tags */}
            <style>{`
                .tag {
                    @apply bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-semibold border border-slate-200;
                }
            `}</style>
        </div>
    );
};

export default Projects;
