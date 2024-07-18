import { Icons } from ".."
import { projectsList } from "./projects"
const aboutMe = {
    softSkills: [
        'English Upper Intermediate', 'Team Player', 'Self-organized', 
        'Social', 'Problem-solving', 'Creative', 'Strong communication skills', 
        'Analytical and critical thinking'
    ],
    techSkills: [
        'Database modeling', 'Agile methods', 'Scrum', 'API Rest creation', 'UX/UI', 'OOP', 'UML'
    ],
    interests: [
        'UX/UI', 'Graphic Design', 'Business & Entrepreneurship', 'Software Development', 'Marketing', 'Finance'
    ]
}

const levelRef = {
    beg: {levelName: 'Beginner', ref: 'I know the basics, I need the docs to use it'},
    interm: {levelName: 'Intermediate', ref: 'I can build things, I am getting deeper into the tool.'},
    adv: {levelName: 'Advanced', ref: 'I used it a lot, I can explain it to others, but I am still learning.'}
}

const links = {
    whatsapp: "https://wa.me/5492983522129?text=Hola%20Leo!%20Tengo%20una%20oferta%20de%20trabajo%20para%20vos",
    linkedin: "https://www.linkedin.com/in/leonelleguizamón/",
    github: {
        main: "https://github.com/Leonel-Leguizamon",
        rentar: "https://github.com/Leonel-Leguizamon",
        chatanne: "https://github.com/Leonel-Leguizamon",
        portfolio: "https://github.com/Leonel-Leguizamon",
    },
    cnn: "https://colab.research.google.com/drive/1AoQFZYxhAv-DBinZDlB6C7GYD4LNNnNY?usp=sharing"

}

const techStack = {
    languages: [
        {name: 'Java', learned: 'Learned at college', icon: Icons.technologies.java, level: levelRef.adv},
        {name: 'Python', learned: 'Learned at college', icon: Icons.technologies.python, level: levelRef.interm},
        {name: 'Javascript', learned: 'Learned on my own', icon: Icons.technologies.javascript, level: levelRef.beg},
        {name: 'C++', learned: 'Learned at college', icon: Icons.technologies.cplusplus, level: levelRef.beg},
    ],
    dbs: [
        {name: 'PostgreSQL', learned: 'Learned at college', icon: Icons.technologies.postgres, level: levelRef.adv},
        {name: 'MongoDB', learned: 'Learned at college', icon: Icons.technologies.mongo, level: levelRef.beg},
    ],
    frameworks: [
        {name: 'Node + ExpressJS', learned: 'Learned at college', level: levelRef.beg},
        {name: 'Spring Boot', learned: 'Learned on my own', level: levelRef.beg},
        {name: 'Vite + React + TailwindCSS', learned: 'Learned on my own', level: levelRef.interm},
        {name: 'React Native', learned: 'Learned on my own', level: levelRef.beg},
    ],
    tools: [
        'Postman', 'Docker', 'Git / Github', 'Jira','Photshop','Figma', 
    ]
}

const workExperience = [
    {
        title: "Ayudante de Cátedra",
        subtitle: "POO  | FCEx UNICEN | 2024",
        overview: "During the first quarter of 2024, I was an assistant in object-oriented programming. My main tasks were:",
        mainTasks: ["Assisting students", "Solving practical exercises", "Correcting exams"],
        learned: "This experience helped me improve my interpersonal skills, communication, patience, empathy and perfectionate knowledge about OOP."
    }
]




export {aboutMe, levelRef, techStack, links, projectsList, workExperience}