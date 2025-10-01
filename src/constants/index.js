import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  google,
  sampad,
  outlier,
  python,
  cpp,
  java,
  c,
  pytorch,
  tensorflow,
  gym,
  bash,
  sql,
  chess,
  fitness,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: web,
  },
  {
    title: "Systems & Backend Developer",
    icon: mobile,
  },
  {
    title: "Data & Cloud Engineer",
    icon: backend,
  },
  {
    title: "Collaborator & Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Open AI Gym",
    icon: gym,
  },
];

const experiences = [
  {
    title: "Organizer & Manager",
    company_name: "Competitive Programming Contests",
    icon: sampad,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Launched and ran math/programming contests (7 → 25 participants, +257%).",
      "Handled problem curation, judging, and mentoring.",
    ],
  },
  {
    title: "Math Tutor",
    company_name: "SAMPAD",
    icon: sampad,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Mar 2023",
    points: [
      "Taught algebra, combinatorics, and graph theory to 40 students.",
      "Raised average scores ~25%; mentees earned 1 Gold & 2 Silver medals.",
    ],
  },
  {
    title: "AI Trainer & Reviewer",
    company_name: "Outlier AI",
    icon: outlier,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points: [
      "Evaluated/corrected model outputs to improve quality and safety.",
      "Authored training examples and refined labeling guidelines.",
      "Helped streamline data pipelines, speeding releases by ~15%.",
    ],
  },
  {
    title: "Academic Director",
    company_name: "Google Developer Group, UofT",
    icon: google,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Lead developer community; plan and run AI/ML & modern web workshops.",
      "Coordinate speakers/partners and logistics; grow member engagement.",
      "Mentor peers on projects, resumes, and interview prep.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Chess AI",
    description:
      "Custom Python chess engine with two play modes: reinforcement learning via DQN in an OpenAI Gym environment, and a minimax search with alpha–beta pruning. Includes a Pygame GUI for interactive human vs. AI matches.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/AlirezaPrz/ChessAI",
  },
  {
    name: "Fitness Tracker",
    description:
      "Machine learning system for real-time barbell exercise recognition using sensor data. Built preprocessing pipeline with filtering and PCA, trained classifiers, and designed a custom algorithm to accurately count reps across multiple lifts.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/AlirezaPrz/Fitness-Tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
