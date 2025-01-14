import React from 'react';

const projects = [
  {
    title: 'The Vault',
    link: 'https://github.com/HarshaKamakshigari/The-vault',
    description: 'A secure password manager to safely store and retrieve your passwords.',
  },
  {
    title: 'Arbor',
    link: 'https://github.com/yourusername/html2',
    description: 'A project focusing on sustainable tech solutions and green computing.',
  },
  {
    title: 'Spotify Case Study',
    link: 'https://github.com/yourusername/html3',
    description: 'An in-depth analysis of Spotify’s recommendation algorithm and user engagement strategies.',
  },
  {
    title: 'Sloud',
    link: 'https://github.com/yourusername/html4',
    description: 'A music streaming website with a focus on community and emerging artists.',
  },
];

const Projects = () => {
  return (
    <div className="works pt-10 bg-gray-300" id="work">
      <p className="text-black pl-10 pb-8 font-open-sans text-xl md:text-5xl font-semibold">
        Works<span className="text-red-600">.</span>
      </p>
      <div className="prjs">
        <ul className="space-y-5 pl-9 pr-10">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <li className="relative group flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black text-5xl md:text-7xl font-light hover:font-normal pl-5"
                >
                  {project.title}
                </a>
                <p className=" group-hover:block text-black text-lg pl-32 w-1/2">
                  {project.description}
                </p>
              </li>
              {index < projects.length - 1 && <li><hr className="border-gray-600 mx-4" /></li>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
