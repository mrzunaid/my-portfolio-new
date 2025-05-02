'use client';

import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'hellotax',
    link: 'https://app.hellotax.com',
    image: '/logos/hellotax.svg',
  },
  {
    id: 2,
    title: 'Conectar',
    link: '#',
    image: '/logos/conectar.svg',
  },
  {
    id: 3,
    title: 'John Deere',
    link: 'https://atu300.deere.com',
    image: '/logos/john-deere.svg',
  },
  {
    id: 4,
    title: 'Personal Website',
    link: 'https://olaolu.dev',
    image: '/logos/olaolu.svg',
  },
  {
    id: 5,
    title: 'Pixel2HTML',
    link: 'https://pixel2html.netlify.app',
    image: '/logos/pixel2html.svg',
  },
  {
    id: 6,
    title: 'dropd',
    link: 'https://npm.im/react-dropd',
    image: '/logos/dropd.svg',
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 md:py-40 px-24 min-h-screen">
      <div className="container max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">/work.</h2>
        <p className="text-muted-foreground text-center mb-12">
          Selected work I've taken on in the past.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-primary">
  {project.link.startsWith('http') ? new URL(project.link).hostname : project.link}
</p>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
