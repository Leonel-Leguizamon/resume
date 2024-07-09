import * as Documents from '../documents'
import { technologies } from "../icons"
import { projectImages } from "../imgs"

const projectsList = [
    { 
        title: "Rentar", 
        subtitle: "Fullstack web platform for car rental. ", 
        overview: "In this college project, I developed a car rental platform with a colleague, where the main idea is that a user can see the cars available for rent in each of the branches established in the country, according to categories, dates, types of cars, and make reservations.", 
        mainRole: [
            "Prototype the platform with Figma.", 
            "Implement the frontend with React & Tailwind CSS.",
            "Deployment configuration with Docker.",
            "Participate in backend development with ExpressJS, Mongoose, MongoDB"
        ],
        doneAt: "Done at college", 
        techIcons: [
            technologies.mongo_gray,
            technologies.express,
            technologies.react,
            technologies.nodejs,
            technologies.docker,
            technologies.github_gray
        ], 
        mainImage: projectImages.rentar_main, 
        stackedImages: projectImages.rentar_stacked,
        links: { 
            repo: { title: "🔗 Link to GitHub repository ", link: "https://github.com/Leonel-Leguizamon/tallerwebv2.git"}, 
            docs: [Documents.Rentar_documentation], 
            video: ""
        }
    },
    { 
        title: "Chatanne", 
        subtitle: "Web platform that uses AI to answer questions about uploaded PDFs.", 
        overview: "Chatanne is a chatbot capable of processing PDF documents and answering questions related to their content. It is an interactive platform that allows users to create chats, upload their own PDF files and make queries about them.", 
        mainRole: [
            "Prototype the platform with Figma.", 
            "Implement the frontend with React & Tailwind CSS.",
            "Project planning.",
            "Lead the frontend team."
        ],
        doneAt: "Done at college", 
        techIcons: [
            technologies.react,
            technologies.docker,
            technologies.github_gray
        ], 
        mainImage: projectImages.chatanne_main, 
        stackedImages: projectImages.chatanne_stacked,
        links: { 
            repo: { title: "🔗 Link to GitHub repository ", link: "https://github.com/Leonel-Leguizamon/Chat-anne.git"}, 
            docs: [Documents.chatanne_endpoints, Documents.chatanne_info], 
            video: ""
        }
    },
    { 
        title: "Neural Network", 
        subtitle: "CNN for Fruits & Vegetables classification, including freshness detection.", 
        overview: "This project is part of the subject 'Neuroscience of Learning Machines' and aims to apply the concepts learned about neural networks and their ability to recognize and classify images. \n A convolutional neural network (CNN) was developed capable of classifying fruits and vegetables and determining whether they are fresh or rotten. Since we are predicting two different types of classes (name and freshness), the neural network must have multiple outputs.", 
        mainRole: [
            "Plan and develop the CNN", 
            "Preprocessing the datasets",
            "Configure some neural networks",
            "Analyze the resu;ts and adjust parameters"
        ],
        doneAt: "Done at college", 
        techIcons: [
            technologies.tensorflow,
            technologies.python_gray
        ], 
        mainImage: projectImages.cnn_main, 
        stackedImages: projectImages.cnn_stacked,
        links: { 
            repo: { title: "🔗 Link to Colab Notebook", link: "https://colab.research.google.com/drive/1AoQFZYxhAv-DBinZDlB6C7GYD4LNNnNY?usp=sharing"}, 
            docs: [], 
            video: ""
        }
    },
    { 
        title: "My Portfolio", 
        subtitle: "Website made to show projects, skills and relevant information about me", 
        overview: "With this portfolio I aim to demonstrate my knowledge in the different areas of software development, for those recruiters who are looking for potential great engineers. Still, it will always be difficult to show all of a person's skills with text and images alone.", 
        mainRole: [
            "Prototype the platform with Figma.", 
            "Implement the frontend with React & Tailwind CSS."
        ],
        doneAt: "Done by my own", 
        techIcons: [
            technologies.react,
            technologies.github_gray
        ], 
        mainImage: projectImages.portfolio_main, 
        stackedImages: projectImages.cnn_stacked,
        links: { 
            repo: { title: "🔗 Link to GitHub repository ", link: "https://github.com/Leonel-Leguizamon/resume"},
            docs: [], 
            video: ""
        }
    },
]

export { projectsList }