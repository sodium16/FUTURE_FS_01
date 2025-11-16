#Vishwas Naveen - Personal Portfolio

This repository contains the source code for my personal portfolio website, designed to showcase my skills, projects, and experience as a software engineer and AI/ML student.

The site is a modern, fully responsive single-page application built with React and featuring cinematic scroll-based animations orchestrated with GSAP.

###View the live site: vishwasnaveen.vercel.app

##Features

Responsive Design: A custom, mobile-first layout that ensures a great experience on all devices, from phones to desktops.

Cinematic Animations: Uses GSAP (GreenSock Animation Platform) and ScrollTrigger to create sophisticated, responsive animations:

Desktop: A "pinned" hero section with a Smart Animate-style scroll effect.

Mobile: A lightweight, performant parallax scroll effect for a clean mobile-native feel.

Component-Based: Built with React, organizing each section (Landing, About, Skills, etc.) into clean, reusable components.

SEO Optimized: Includes rich metadata in index.html for professional-looking search results and social media link previews (Open Graph tags).

Tech Stack

This project was built using a modern frontend tech stack:

Framework: React.js

Build Tool: Vite

Styling: Tailwind CSS

Animation: GSAP (GreenSock)

Deployment: Vercel / Netlify

Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:

```
git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name
```

2. Install dependencies:
Using npm (as defined in package.json):

```
npm install
```

3. Run the development server:
This will start a live-reload server, usually at http://localhost:5173.

```
npm run dev
```

Available Scripts

This project comes with several scripts defined in package.json:

npm run dev: Starts the application in development mode.

npm run build: Bundles the application for production into the dist folder.

npm run lint: Runs the ESLint code linter to check for errors and style issues.

npm run preview: Starts a local server to preview the final production build from the dist folder.

Deployment

This site is configured for easy deployment on platforms like Vercel or Netlify.

After connecting your GitHub repository, Vercel will automatically detect that this is a Vite project and use the following settings:

Build Command: npm run build

Output Directory: dist

Any push to the main branch will automatically trigger a new deployment.