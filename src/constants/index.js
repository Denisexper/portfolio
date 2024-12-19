import pro1 from "../assets/projects/project1.png"
import pro2 from "../assets/projects/project2.png"
import pro3 from "../assets/projects/project3.png"

export const HERO_CONTENT = `I am a full stack developer passionate about creating scalable web 
applications, looking to further perfect my skills in React and JavaScript, as well as in the 
backend with Node.js, MySQL, and MongoDB. My goal is to apply
 my skills and acquire new knowledge that helps me improve more and more each day.`

export const ABOUT_CONTENT = `I am passionate and dedicated to versatile technologies, always characterized by honest and quality work.
Among the technologies I know a bit about are React, JavaScript, TypeScript, Node.js, MongoDB, and SQL Server. I am highly interested in 
learning more in-depth about the technologies I know so far, as well as learning new ones. 
I am always open to advice and feedback aimed at enhancing my knowledge.`

export const EXPERIENCIES = [
    {
        year: "2025 - Present",
        role: "Full Stack Developer",
        company: "Free Lance",
        description: "Developed multiple web applications using React, Node.js, and MongoDB.",
        technologies: ["Javascript", "React", "Node.js", "MongoDB"],
    },
    {
        year: "2023 - 2024 ",
        role: "Full Stack Developer",
        company: "Free Lance",
        description: "Developed multiple web applications using React, Node.js, and MongoDB.",
        technologies: ["Javascript", "React", "Node.js", "MongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Student at the University",
        company: "Learning",
        description: "Developed multiple web applications using React, Node.js, and MongoDB.",
        technologies: ["Javascript", "React", "Node.js", "MongoDB"],
    }
]

export const PROJECTS = [
    {
        title: "Crud-Users",
        image: pro3,
        description: "This is a crud application that allows users to create, read, update and delet",
        technologies: ["TypeScript", "React", "Node.js", "MongoDB"],

    },
    {
        title: "Library-Management",
        image: pro2,
        description: "This is a library management aplication where the administrator can make book loans, add new users, and register in the application. They can also delete and add new books and authors. ",
        technologies: ["Php", "Laravel", "Filament", "Mysql"]
    },
    {
        title: "Web-site",
        image: pro1,
        description: "This is a web-site created for show the final projects of the students in the university ",
        technologies: ["Html", "Css", "JavaScript"]

    }
]

export const  CONTACT = {
    addres: "San Miguel, El Salvador",
    phone: "+503 70591935",
    email: "vasquezdenis684@gmail.com"
}