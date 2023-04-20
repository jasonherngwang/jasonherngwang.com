import { ProjectDetails } from '@/types';

export const otherProjects: ProjectDetails[] = [
  {
    title: 'JaguarBin',
    description:
      'A tool for collecting and inspecting HTTP requests and webhooks.',
    stack:
      'socket.io, React, Tailwind, Express, TypeScript, MongoDB, PostgreSQL, Nginx, DigitalOcean Droplet',
    imageName: 'jaguarbin.webp',
    imageAlt: 'Screenshot of JaguarBin App',
    siteUrl: 'https://jaguarbin.teamjaguar.org/',
    githubUrl: 'https://github.com/ls-jre/jaguarbin',
  },
  {
    title: 'In Season',
    description:
      "An app for tracking what fruits and vegetables are in season right now. I built this during Launch School's Capstone Prep phase to practice Just-in-Time learning of Docker and AWS infrastructure.",
    stack:
      'React, Tailwind, Express, TypeScript, MongoDB, Mongoose, Jest, Cypress, Docker Compose, Nginx, AWS SDK, EC2, S3, CloudFront',
    imageName: 'in-season.webp',
    imageAlt: 'Screenshot of In Season App',
    siteUrl: 'https://in-season-now.com/',
    githubUrl: 'https://github.com/jasonherngwang/in-season-frontend',
    blogUrl:
      'https://medium.com/@jasonherngwang/using-jit-learning-to-build-an-app-during-launch-schools-capstone-prep-2a67e2023454',
  },
  {
    title: 'Eight Wonders',
    description:
      'A flight path optimizer that finds the shortest route connecting up to any 8 airports. I created this after learning Ruby fundamentals during the Launch School Core program.',
    stack: 'Ruby, Sinatra, PostgreSQL, ERB, HTML, CSS, fly.io',
    imageName: 'eight-wonders.webp',
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
    imageName: 'roar-store.webp',
    imageAlt: 'Screenshot of Roar! Store App',
    siteUrl: 'https://roar-store.teamjaguar.org/',
    githubUrl: 'https://github.com/ls-jre/roar-store',
  },
  {
    title: 'I ❤️ LeetCode',
    description:
      'A LeetCode random problem selector and timer, for simulating being in the hot seat during interviews. I built this to learn Next.js, Prisma, and deploying to a DigitalOcean VPS.',
    stack:
      'Next.js, Prisma, Tailwind, Mongoose, PostgreSQL, DigitalOcean Droplet',
    imageName: 'love-leetcode.webp',
    imageAlt: 'Screenshot of Love LeetCode App',
    siteUrl: 'https://leetcode.jasonherngwang.com/',
    githubUrl: 'https://github.com/jasonherngwang/love-leetcode',
  },
];
