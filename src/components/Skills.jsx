import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-slate-700">{name}</span>
            <span className="text-sm font-medium text-slate-400">{level}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
            <motion.div
                className="bg-primary-accent h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            ></motion.div>
        </div>
    </div>
);

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js & Express.js', level: 70 },
        { name: 'MongoDB / MySQL', level: 65 },
    ];

    const techStack = [
        {
            category: "Languages",
            items: ["HTML", "CSS", "JavaScript"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React", "Express.js", "Tailwind CSS"]
        },
        {
            category: "Tools & Technologies",
            items: ["Node.js", "MongoDB", "MySQL", "Git", "GitHub"]
        }
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Skills Overview</h2>

            <div className="grid md:grid-cols-2 gap-16">

                {/* Clean Progress Bars */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Proficiency Levels</h3>
                    {skills.map((skill, index) => (
                        <SkillBar key={index} {...skill} />
                    ))}
                </div>

                {/* Categorized Tags */}
                <div className="space-y-8">
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Technical Stack</h3>
                    {techStack.map((stack, idx) => (
                        <div key={idx}>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">{stack.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {stack.items.map((item, i) => (
                                    <span key={i} className="bg-white border border-slate-200 px-3 py-1 rounded-md text-sm text-slate-600 font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
