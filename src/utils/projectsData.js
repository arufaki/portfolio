import ecomate from "../assets/ecomate.webp";
import ecoshelf from "../assets/ecoshelf.webp";
import fkhco from "../assets/fkhco.webp";
import todo from "../assets/todo.webp";

const projects = [
  {
    title: "TodoList",
    thumb: todo,
    links: {
      github: "https://github.com/arufaki/todo-list",
      deploy: "https://todo-list-arufaki.vercel.app/",
    },
    description:
      "The web app provides a to-do list feature that allows users to add, mark as done, and delete tasks, helping them manage tasks effectively.",
    stack: ["React", "Zustand", "CSS"],
  },
  {
    title: "FKH.CO",
    thumb: fkhco,
    links: {
      github: "https://github.com/arufaki/laravel-ecommerce",
      deploy: "https://e-commerce-arufaki.vercel.app/",
    },
    description:
      "The e-commerce platform allows users to add products to the cart, proceed to checkout, and view their order history for easy management.",
    stack: ["PHP", "Laravel", "CSS", "MySQL"],
  },
  {
    title: "EcoShelf",
    thumb: ecoshelf,
    links: {
      github: "https://github.com/arufaki/EcoShelf",
      deploy: "https://eco-shelf.vercel.app/",
    },
    description:
      "EcoShelf is a web platform that recommends books focused on environmental topics to educate users and raise awareness about important environmental issues.",
    stack: ["React", "Supabase", "TailwindCSS", "GeminiAI", "Vite"],
  },
  {
    title: "Ecomate",
    thumb: ecomate,
    links: {
      github:
        "https://github.com/GreenEnvironment-1-CapstoneProject/Frontend-React",
      deploy: "https://ecomate-eight.vercel.app/",
    },
    description:
      "The eco-friendly e-commerce platform lets users add products to the cart, checkout, payment gateway, challenges, interact with forum, andview order history.",
    stack: ["JavaScript", "Go", "TailwindCSS", "MySQL"],
  },
];

export default projects;
