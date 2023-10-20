import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 0,
    title: "Tournament Assembly",
    desc: "This project is part of the Ticorporate course in JAMK. During the coursestudents do a larger project of their own choosing in groups of five. My role in the project was product owner, technical supervisor and testing. I wrote code in the frontend aswell as the backend and made sure the project was on time and retained the vision we planned in the beginning.",
    issues: [
      {
        title: "Tournament caching",
        desc: "App should save latest tournament for later use.",
        resolution:
          "To solve this issue I used localStorage to store tournament data as a string using a tokenification function. After the string has been created it can be stored in localStorage and loaded when needed with the detokenification function that returns the string back to usable format.",
        images: [
          {
            src: "../../assets/tokenify.PNG",
            alt: "tokenify",
            desc: "Creating serialized token",
          },
          {
            src: "../../assets/detokenify.PNG",
            alt: "detokenify",
            desc: "Return token to usable object",
          },
          {
            src: "../../assets/url.PNG",
            alt: "token in url",
            desc: "Tournament token in URL",
          },
        ],
      },
      {
        title: "Playoff bracket algorithm",
        desc: "Playoffs bracket needs to set up matches, resolve matches and declare a winner.",
        resolution:
          "Issue was solved by creating a matrix with arrays, that has each round simulated as an array which has the matches listed as objects. For a deeper learning experience, I decided to built the system without using any external libraries.",
        images: [
          {
            src: "../../assets/matrix.PNG",
            desc: "Matrix for rendering and resolving",
            alt: "matrix",
          },
          {
            src: "../../assets/playoff_bracket.PNG",
            desc: "Playoff brackets rendered",
            alt: "playoff bracket",
          },
        ],
      },
    ],
  },
];
