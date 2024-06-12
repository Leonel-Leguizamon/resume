import { Icons } from ".."

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

const levelRef= {
    beg: {levelName: 'Beginner', ref: 'I know the basics, I need the docs to use it'},
    interm: {levelName: 'Intermediate', ref: 'I can build things, I am getting deeper into the tool.'},
    adv: {levelName: 'Advanced', ref: 'I used it a lot, I can explain it to others, but I am still learning.'}
}



const techStack = {
    languages: [
        {name: 'Java', learned: 'Learned at college', icon: Icons.java, level: levelRef.adv},
        {name: 'Python', learned: 'Learned at college', icon: Icons.python, level: levelRef.interm},
        {name: 'Javascript', learned: 'Learned on my own', icon: Icons.javascript, level: levelRef.beg},
        {name: 'C++', learned: 'Learned at college', icon: Icons.cplusplus, level: levelRef.beg},
    ],
    dbs: [
        {name: 'PostgreSQL', learned: 'Learned at college', icon: Icons.postgres, level: levelRef.adv},
        {name: 'MongoDB', learned: 'Learned at college', icon: Icons.mongo, level: levelRef.beg},
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




export {aboutMe, levelRef, techStack}