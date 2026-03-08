import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { portfolioData } from '../data/portfolioData.js';

const ContactIcon = ({ type }) => {
  if (type === 'email') {
    return (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }

  return (
    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

const SocialIcon = ({ type }) => {
  if (type === 'github') {
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }

  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
};

const Hero = () => {
  const { personal, contact, socialLinks, bio } = portfolioData;
  const [isGeneratingCv, setIsGeneratingCv] = useState(false);
  const contactItems = [
    { type: 'email', value: contact.email, href: `mailto:${contact.email}` },
    { type: 'phone', value: contact.phoneNum, href: `tel:${contact.phoneNum}` },
    { type: 'location', value: contact.location },
  ];

  const buttonClassNames = {
    primary:
      'px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-sky-500/50',
    secondary:
      'px-6 py-3 border-2 border-sky-500 text-sky-400 rounded-lg font-semibold hover:bg-sky-500/10 transition-all duration-300',
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCv = async (event) => {
    event.preventDefault();

    if (isGeneratingCv) {
      return;
    }

    setIsGeneratingCv(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      let yPosition = 20;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentWidth = pageWidth - 2 * margin;

      // Utility functions
      const setFont = (size, weight = 'normal', color = '#000000') => {
        pdf.setFontSize(size);
        pdf.setFont('helvetica', weight);
        const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
        pdf.setTextColor(r, g, b);
      };

      const addText = (text, x, y, options = {}) => {
        const { maxWidth = contentWidth, align = 'left', fontSize = 12, color = '#000000', weight = 'normal' } = options;
        setFont(fontSize, weight, color);
        pdf.text(text, x, y, { maxWidth, align });
      };

      const checkNewPage = (neededHeight) => {
        if (yPosition + neededHeight > 270) {
          pdf.addPage();
          yPosition = 20;
        }
      };

      // Header with name and role
      addText(personal.name, margin, yPosition, { fontSize: 24, weight: 'bold', color: '#0ea5e9' });
      yPosition += 8;
      addText(personal.role, margin, yPosition, { fontSize: 14, color: '#333333' });
      yPosition += 10;

      // Contact info
      const contactInfo = [contact.email, contact.phoneNum, contact.location].join(' • ');
      setFont(10, 'normal', '#555555');
      pdf.text(contactInfo, margin, yPosition, { maxWidth: contentWidth });
      yPosition += 12;

      // About section
      if (bio && bio.paragraphs && bio.paragraphs.length > 0) {
        checkNewPage(25);
        addText('ABOUT', margin, yPosition, { fontSize: 12, weight: 'bold', color: '#0ea5e9' });
        yPosition += 6;
        
        bio.paragraphs.forEach((para) => {
          checkNewPage(10);
          const lines = pdf.splitTextToSize(para, contentWidth);
          setFont(10, 'normal', '#333333');
          pdf.text(lines, margin, yPosition);
          yPosition += lines.length * 4 + 3;
        });
        yPosition += 3;
      }

      // Skills section
      if (portfolioData.skills && portfolioData.skills.blocks) {
        portfolioData.skills.blocks.forEach((block) => {
          checkNewPage(25);
          addText(block.title.toUpperCase(), margin, yPosition, { fontSize: 11, weight: 'bold', color: '#0ea5e9' });
          yPosition += 5;

          block.items.forEach((skill) => {
            checkNewPage(5);
            setFont(10, 'normal', '#333333');
            pdf.text(`• ${skill.name}`, margin + 2, yPosition);
            yPosition += 4;
          });
          yPosition += 3;
        });
        yPosition += 3;
      }

      // Education section
      if (portfolioData.others && portfolioData.others.education) {
        checkNewPage(20);
        addText('EDUCATION', margin, yPosition, { fontSize: 12, weight: 'bold', color: '#0ea5e9' });
        yPosition += 6;

        portfolioData.others.education.forEach((edu) => {
          checkNewPage(12);
          addText(edu.degree, margin, yPosition, { fontSize: 10, weight: 'bold', color: '#333333' });
          yPosition += 4;
          addText(edu.school, margin, yPosition, { fontSize: 9, color: '#555555' });
          yPosition += 4;
          addText(`${edu.period} • ${edu.description}`, margin, yPosition, { fontSize: 9, color: '#777777' });
          yPosition += 5;
        });
        yPosition += 5;
      }

      // Projects section
      if (portfolioData.projects && portfolioData.projects.cards) {
        checkNewPage(20);
        addText('PROJECTS', margin, yPosition, { fontSize: 12, weight: 'bold', color: '#0ea5e9' });
        yPosition += 6;

        portfolioData.projects.cards.forEach((project) => {
          checkNewPage(15);
          addText(project.title, margin, yPosition, { fontSize: 10, weight: 'bold', color: '#333333' });
          yPosition += 4;
          
          const descLines = pdf.splitTextToSize(project.description, contentWidth);
          setFont(9, 'normal', '#555555');
          pdf.text(descLines, margin, yPosition);
          yPosition += descLines.length * 3 + 2;

          const tagsText = project.tags.join(' • ');
          setFont(8, 'normal', '#0ea5e9');
          pdf.text(tagsText, margin, yPosition);
          yPosition += 4;
        });
        yPosition += 5;
      }

      // Achievements section
      if (portfolioData.others && portfolioData.others.achievements && portfolioData.others.achievements.length > 0) {
        checkNewPage(20);
        addText('ACHIEVEMENTS', margin, yPosition, { fontSize: 12, weight: 'bold', color: '#0ea5e9' });
        yPosition += 6;

        portfolioData.others.achievements.forEach((achievement) => {
          checkNewPage(10);
          addText(achievement.title, margin, yPosition, { fontSize: 10, weight: 'bold', color: '#333333' });
          yPosition += 4;
          addText(`${achievement.organization} • ${achievement.description}`, margin, yPosition, { fontSize: 9, color: '#555555' });
          yPosition += 5;
        });
      }

      const fileName = `${personal.name.trim().replace(/\s+/g, '_')}_CV.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Unable to generate CV PDF:', error);
      window.alert('CV generation failed. Please try again.');
    } finally {
      setIsGeneratingCv(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-sky-500/30 hover:border-sky-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/20 overflow-hidden max-h-[350px] hover:max-h-[600px]">
            <div className="relative mb-6 h-24 transition-all duration-500 ease-out group-hover:h-56">
              <div className="absolute left-0 top-0 h-24 w-24 overflow-hidden rounded-full transition-all duration-500 ease-out transform-gpu group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-150 group-hover:rounded-lg">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pl-28 pt-2 transition-all duration-500 ease-out group-hover:pl-0 group-hover:pt-40 group-hover:text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  {personal.name}
                </h1>
                <p className="text-sky-400 text-lg">{personal.role}</p>
              </div>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <div key={item.type} className="flex items-center gap-3 text-gray-300">
                  <ContactIcon type={item.type} />
                  {item.href ? (
                    <a href={item.href} className="hover:text-sky-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
                {socialLinks.map((social) => (
                  <a key={social.type} href={social.url} className="text-gray-300 hover:text-sky-400 transition-colors">
                    <SocialIcon type={social.type} />
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
          </div>

          <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-sky-500/30 hover:border-sky-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/20 overflow-hidden max-h-[350px] hover:max-h-[600px]">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              {bio.title}
            </h2>
            {bio.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-gray-300 leading-relaxed ${index < bio.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex gap-4">
              {bio.buttons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  onClick={(e) => {
                    if (button.label === 'View Projects') {
                      e.preventDefault();
                      handleScrollToProjects();
                      return;
                    }

                    if (button.label === 'Download CV') {
                      handleDownloadCv(e);
                    }
                  }}
                  className={`${buttonClassNames[button.variant]} ${
                    button.label === 'Download CV' && isGeneratingCv ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  aria-disabled={button.label === 'Download CV' && isGeneratingCv}
                >
                  {button.label === 'Download CV' && isGeneratingCv ? 'Generating PDF...' : button.label}
                </a>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
