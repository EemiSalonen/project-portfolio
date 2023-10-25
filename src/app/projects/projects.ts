import { Project } from "../types/Project";

export const projects: Project[] = [
	{
		id: 0,
		title: "Tournament Assembly",
		desc: "This project is part of the Ticorporate course in JAMK. During the coursestudents do a larger project of their own choosing in groups of five. My role in the project was product owner, technical supervisor and testing. I wrote code in the frontend aswell as the backend and made sure the project was on time and retained the vision we planned in the beginning.",
		issues: [
			{
				title: "Tournament caching",
				desc: "App should save latest tournament for later use",
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
				desc: "Playoffs bracket needs to set up matches, resolve matches and declare a winner",
				resolution:
					"Issue was solved by creating a matrix with arrays, that has each round simulated as an array which has the matches listed as objects. For a deeper learning experience, I decided to built the system without using any external libraries.",
				images: [
					{
						src: "../../assets/matrix.PNG",
						desc: "Matrix for rendering and resolving",
						alt: "matrix",
					},
					{
						src: "../../assets/playoffs_code_example.PNG",
						desc: "Example of playoffs algorithm",
						alt: "playoffs code example",
					},
					{
						src: "../../assets/playoff_bracket.PNG",
						desc: "Playoff brackets rendered",
						alt: "playoff bracket",
					},
				],
			},
			{
				title: "Backend for saving tournaments",
				desc: "Users need to be able to save their tournament after creating an account",
				resolution:
					"A backend service hosted on AWS using MongoDB and a REST API Express application. Users can create an account, after which their tournaments are saved in to the database along with their current state, allowing for easy access later. Passwords are protected via encryption and request require tokens to be validated.",
				images: [
					{
						src: "../../assets/usercontroller.PNG",
						desc: "REST API User controller",
						alt: "user controller",
					},
					{
						src: "../../assets/testuser.PNG",
						desc: "Test user object",
						alt: "testuser",
					},
				],
			},
			{
				title: "User data state management",
				desc: "Users data needs to be kept in state while using the application",
				resolution:
					"Solved by using a Svelte store to make requests to the REST API and storing the required parts, while removing temporary parts of the data. Sends newly created tournaments back to the API to be stored in the database, and updates the UI accordingly.",
				images: [],
			},
		],
	},
];
