import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillIcon = ({ type }) => {
  if (type === 'mastery') {
    return (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }

  if (type === 'experience') {
    return (
      <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  return (
    <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
};

const SkillCard = ({ title, skillItems, icon }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-sky-500/30 hover:border-sky-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <div className="space-y-4">
      {skillItems.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <span className="text-gray-300 font-medium">{skill.name}</span>
            <span className="text-sky-400 font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { skills: skillsSection } = portfolioData;

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              {skillsSection.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">{skillsSection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsSection.blocks.map((block) => (
            <SkillCard
              key={block.title}
              title={block.title}
              skillItems={block.items}
              icon={<SkillIcon type={block.icon} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
