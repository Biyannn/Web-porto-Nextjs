import Header from "../General/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <div data-aos="fade-right">
          <ProjectCard
            title="VideoBelajar EduCourse"
            imagePath="/Image/Projects/VideoBelajar.png"
            link="https://mission-adv-fe-2-a.vercel.app/"
            description="Create a learning e-commerce website, using HTML, TailwindCSS, and React.js that is interactive and responsive. And create a Login Register page that is Authentication by using Axios for the use of CRUD and Zustand for the use of state management."
            techStack="Tech Stack: Reactjs · TailwindCSS · Zustand (State Management) · Axios (API Handling) · MockAPI (Auth & CRUD) · Vite · Vercel"
          />
        </div>

        <div data-aos="fade-left">
          <ProjectCard
            title="YanFlix Movies Databases"
            imagePath="/Image/Projects/Yanflix Movies Databases.png"
            link="https://yan-flix.vercel.app/"
            description="YanFlix is a movie database web application built with React.js that delivers a modern and responsive movie browsing experience. The app uses TMDB API to fetch movie data and MockAPI to handle authentication and CRUD operations, with API communication managed through Axios. The project emphasizes clean front-end architecture, efficient global state management with Zustand, and responsive UI styling using Tailwind CSS."
            techStack="Tech Stack: Reactjs · TailwindCSS · Zustand (State Management) · Axios (API Handling) · MockAPI (Auth & CRUD) · TMDB API (Movie Data) · Vite · Postman (API Testing) · Vercel"
          />
        </div>
        <div data-aos="fade-right">
          <ProjectCard
            title="To Do List App (FullStack)"
            imagePath="/Image/Projects/To Do list App Fullstack.png"
            link="https://todo-list-fullstack-seven.vercel.app/"
            description="A full-featured To Do List web application that allows users to create, manage, and organize tasks with priority levels (low, medium, high). The app includes task completion toggling with visual indicators, filtering by completion status, and delete functionality to manage tasks efficiently. Built with a clean, responsive UI and integrated with a RESTful backend API for data persistence."
            techStack="Tech Stack: React (Vite) · Axios · TailwindCSS · Golang · Vite · Vercel · JSON File Storage · Docker · Postman (API Testing) · Koyeb"
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            title="Web Portofolio TailwindCSS"
            imagePath="/Image/Projects/Web Portfolio.png"
            link="https://portfolio-tailwind-css-sandy.vercel.app/"
            description="This portfolio website uses HTML for structure and layout, Tailwind CSS for responsive and utility-first styling, and JavaScript (linked externally via script.js) to handle interactive features like the hamburger menu. It integrates Font Awesome SVG icons for social media links and uses external image files for visuals. The projects section showcases work built with HTML, CSS, JavaScript, React.js, Axios, and Zustand. A contact form is implemented with Formspree to handle submissions."
            techStack="Tech Stack: HTML · TailwindCSS · JavaScript"
          />
        </div>

        <div data-aos="fade-right">
          <ProjectCard
            title="Secure Authentication Backend API"
            imagePath="/Image/Projects/Secure Authentication Backend API.png"
            link="https://portfolio-tailwind-css-sandy.vercel.app/mission-be-adv.up.railway.app"
            description="A production-ready REST API for user authentication built with Node.js and Express. This backend implements user registration, email verification, and JWT-based authentication, secured with bcrypt password hashing and environment-based configuration. The API is connected to a MySQL database and deployed on Railway, making it accessible for frontend integration and real-world usage. Technologies used include Node.js, Express, MySQL, JWT, Bcrypt, Nodemailer, and Railway for deployment. "
            techStack="Tech Stack: Node.js · Express.js · MySQL · JWT · Bcrypt · Nodemailer · Railway · Postman (API Testing)"
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            title="To Do List App (FrontEnd)"
            imagePath="/Image/Projects/To Do list App.png"
            link="https://mission-4-rho.vercel.app/"
            description="Create a To Do List App with HTML, CSS, and Vanilla JavaScript that can add new lists with low, medium or high features, and there is a check feature that is useful if the list has been done the contents will be crossed out, and there is also a complete or incomplete filter to make it easier to find lists that are complete or not, and there is also a delete feature to delete lists that are no longer needed. "
            techStack="Tech Stack: HTML · CSS · JavaScript"
          />
        </div>
        <div data-aos="fade-right">
          <ProjectCard
            title="Registration Form Dummy"
            imagePath="/Image/Projects/Registration Form.png"
            link="https://registration-form-ruddy-rho.vercel.app/"
            description="The project is a simple web-based registration form built using HTML and styled with CSS. It includes form elements such as text inputs, email and password fields, radio buttons for account type selection, file upload, number input for age, a dropdown menu, a text area for a short bio, and a checkbox for agreeing to terms and conditions. The CSS is used to style the layout with responsive width, centered alignment, dark background colors, and form element spacing to enhance user experience and readability. "
            techStack="Tech Stack: HTML · CSS"
          />
        </div>
        <div data-aos="fade-left">
          <ProjectCard
            title="Web Articles Dummy"
            imagePath="/Image/Projects/Web Articles.png"
            link="https://web-articles-xi.vercel.app/"
            description="The project uses HTML and CSS to build a simple static webpage layout practicing the CSS box model concept. It includes a structured layout with a header containing a navigation menu, a large hero section with a background image, a main content area featuring an article and author info, a sidebar with an image and description, and a footer. The CSS styles control layout dimensions, spacing (margin and padding), font styling, background colors, hover effects, and float-based positioning with a clearfix technique to maintain proper layout structure. The design is responsive and demonstrates core front-end layout."
            techStack="Tech Stack: HTML · CSS"
          />
        </div>
      </div>
    </section>
  );
}
