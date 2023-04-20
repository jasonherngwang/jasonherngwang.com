import { ProjectDetails } from '@/types';

export const otherProjects: ProjectDetails[] = [
  {
    title: 'JaguarBin',
    description:
      'A tool for collecting and inspecting HTTP requests and webhooks. My team built this to learn Nginx configuration, WebSockets, MERN, and cron jobs.',
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
      "An app for tracking what fruits and vegetables are in season right now. I built this during Launch School's Capstone Prep phase to practice Just-in-Time learning of AWS infrastructure, containerization with Docker Compose, and E2E testing with Cypress.",
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
      'A flight path optimizer that finds the shortest route connecting up to 8 airports. I created this after learning Ruby and web development fundamentals during the Launch School Core program.',
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
      'My team created this shopping cart app to practice React, custom hooks for data fetching, and mock testing with Jest.',
    stack: 'React, Tailwind, Jest, Express, MongoDB',
    imageName: 'roar-store.webp',
    imageAlt: 'Screenshot of Roar! Store App',
    siteUrl: 'https://roar-store.teamjaguar.org/',
    githubUrl: 'https://github.com/ls-jre/roar-store',
  },
  {
    title: 'I ❤️ LeetCode',
    description:
      'A LeetCode random problem selector and countdown timer, for simulating pressure on timed assessments. I mainly built this to learn Next.js, Prisma, and deploying to a DigitalOcean VPS, but happened to learn some data structures and algorithms along the way.',
    stack:
      'Next.js, Prisma, Tailwind, Mongoose, PostgreSQL, DigitalOcean Droplet',
    imageName: 'love-leetcode.webp',
    imageAlt: 'Screenshot of Love LeetCode App',
    siteUrl: 'https://leetcode.jasonherngwang.com/',
    githubUrl: 'https://github.com/jasonherngwang/love-leetcode',
  },
];
