import { ProjectDetails } from '@/types';

export const otherProjects: ProjectDetails[] = [
  {
    title: 'JaguarBin',
    description:
      'A tool for collecting and inspecting HTTP requests and webhooks.',
    stack:
      'React, Tailwind, Express, TypeScript, MongoDB, Postgres, Nginx, DigitalOcean Droplet',
    imageName: 'jaguarbin.png',
    imageAlt: 'Screenshot of JaguarBin App',
    siteUrl: 'https://jaguarbin.teamjaguar.org/',
    githubUrl: 'https://github.com/ls-jre/jaguarbin',
  },
  {
    title: 'In Season',
    description: 'Track what fruits and vegetables are in season right now.',
    stack:
      'React, Tailwind, Express, TypeScript, MongoDB, AWS EC2, S3, CloudFront, Docker',
    imageName: 'in-season.png',
    imageAlt: 'Screenshot of In Season App',
    siteUrl: 'https://in-season-now.com/',
    githubUrl: 'https://github.com/jasonherngwang/in-season-frontend',
    blogUrl:
      'https://medium.com/@jasonherngwang/using-jit-learning-to-build-an-app-during-launch-schools-capstone-prep-2a67e2023454',
  },
  {
    title: 'Eight Wonders',
    description:
      "Create a bucket list itinerary, and we'll find the shortest flight path to see them all.",
    stack: 'Ruby, Sinatra, Postgres, ERB, HTML, CSS',
    imageName: 'eight-wonders.png',
    imageAlt: 'Screenshot of Eight Wonders App',
    siteUrl: 'https://eight-wonders.fly.dev/',
    githubUrl: 'https://github.com/jasonherngwang/eight-wonders',
    blogUrl:
      'https://medium.com/@jasonherngwang/building-an-app-at-the-midpoint-of-launch-school-core-d1354fa99188',
  },
  {
    title: 'Roar! Store',
    description:
      'A shopping cart app build to practice React and custom hooks.',
    stack: 'React, Tailwind, Express, MongoDB, Nginx, DigitalOcean Droplet',
    imageName: 'roar-store.png',
    imageAlt: 'Screenshot of Roar! Store App',
    siteUrl: 'https://roar-store.teamjaguar.org/',
    githubUrl: 'https://github.com/ls-jre/roar-store',
  },
];
