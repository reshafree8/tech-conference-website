Tech Conference 2025 - SvelteKit Website 🚀
A modern, fully responsive Tech Conference 2025 website built using SvelteKit, featuring interactive sections, speaker details, event schedules, and more.

 Features:
 --> Fully responsive and visually appealing UI
 --> Modern and interactive design with animations
 --> Modular and clean code structure for easy maintenance
 --> Dynamic components such as countdown timers, speaker sections, and event --> --> schedules
 --> SEO-friendly and optimized for performance

 Getting Started :
 --> Prerequisites
 1) Ensure you have the following installed before setting up the project:

      Node.js (v18+ recommended)
      npm 

 2) Clone the Repository
      
      git clone https://github.com/yourusername/tech-conference.git

 3) cd tech-conference

 4) Install Dependencies

      npm install

 5) Run the Development Server

      npm run dev
 
 6) Now, open http://localhost:5173 in your browser.

 7) Building for Production
      To generate an optimized production build:
         -npm run build
      You can preview the production build using:
         -npm run preview


 Project Structure
 
 tech-conference/
│── src/
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte (Home)
│   │   ├── speakers/
│   │   │   ├── +page.svelte
│   │   ├── schedule/
│   │   │   ├── +page.svelte
│   │   ├── sponsors/
│   │   │   ├── +page.svelte
│   │   ├── about/
│   │   │   ├── +page.svelte
│   │   ├── contact/
│   │   │   ├── +page.svelte
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navbar.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Countdown.svelte (Bonus)
│   │   ├── styles/
│   │   │   ├── global.css
│── static/
|   |----Speakers(imgs of speakers)
|   |----sponsors(imgs of sponsors)   
│── package.json
│── svelte.config.js
│── README.md
|-- tsconfig.js
|-- vite.config.ts


