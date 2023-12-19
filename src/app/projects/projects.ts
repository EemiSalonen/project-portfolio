import { Project } from "../types/Project";

const path = "../../assets/issue_imgs/";

export const projects: Project[] = [
	{
		id: 0,
		title: "Tournament Assembly",
		desc: "This project is part of the Ticorporate course in JAMK. During the course, students do a larger project of their own choosing in groups of five. My roles in the project were product owner, technical supervisor and testing. I wrote code in the frontend aswell as the backend and made sure the project was on time and retained the vision we planned in the beginning.",
		ghLink: "https://github.com/jamktiko/TournamentAssembly-svelte",
		issues: [
			{
				title: "Tournament caching",
				desc: "App should save latest tournament for later use",
				resolution:
					"To solve this issue I used localStorage to store tournament data as a string using a tokenification function. After the string has been created it can be stored in localStorage and loaded when needed with the detokenification function that returns the string back to usable format. Another way to solve the issue would have been using JSON.stringify, which I used in a another part of the application, but here I wanted to challenge myself and come up with a home grown solution.",
				images: [
					{
						src: path + "tokenify.PNG",
						alt: "tokenify",
						desc: "Creating serialized token",
					},
					{
						src: path + "detokenify.PNG",
						alt: "detokenify",
						desc: "Return token to usable object",
					},
					{
						src: path + "url.PNG",
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
						src: path + "matrix.PNG",
						desc: "Matrix for rendering and resolving",
						alt: "matrix",
					},
					{
						src: path + "playoffs_code_example.PNG",
						desc: "Example of playoffs algorithm",
						alt: "playoffs code example",
					},
					{
						src: path + "playoff_bracket.PNG",
						desc: "Playoff brackets rendered",
						alt: "playoff bracket",
					},
				],
			},
			{
				title: "Backend for saving tournaments",
				desc: "Users need to be able to save their tournament after creating an account",
				resolution:
					"A backend service hosted on AWS using MongoDB and a REST API Express application. Users can create an account, after which their tournaments are saved in to the database along with their current state, allowing for easy access later. Passwords are protected via encryption and requests require tokens to be validated.",
				images: [
					{
						src: path + "usercontroller.PNG",
						desc: "REST API User controller",
						alt: "user controller",
					},
					{
						src: path + "testuser.PNG",
						desc: "Test user object",
						alt: "test user",
					},
					{
						src: path + "create_tournament.PNG",
						desc: "Tournament creation function",
						alt: "create tournament",
					},
					{
						src: path + "update_tournament.PNG",
						desc: "Tournament update function",
						alt: "update tournament",
					},
					{
						src: path + "delete_tournament.PNG",
						desc: "Tournament delete function",
						alt: "delete tournament",
					},
				],
			},
			{
				title: "User data state management",
				desc: "Users data needs to be kept in state while using the application",
				resolution:
					"Solved by using a Svelte store to make requests to the REST API and storing the required parts, while removing temporary parts of the data. Sends newly created tournaments back to the API to be stored in the database, and updates the UI accordingly. For keeping the user logged in even when the user refreshes the page, I used session storage to store the user, and then load back to the userStore when needed.",
				images: [
					{
						src: path + "store_login_register.PNG",
						desc: "User store guest login and register",
						alt: " guest login and register",
					},
					{
						src: path + "login.PNG",
						desc: "User store login",
						alt: "login",
					},
					{
						src: path + "sessionstorage.PNG",
						desc: "User loaded from session storage",
						alt: "session storage",
					},
				],
			},
			{
				title: "Backend testing",
				desc: "Backend functionality must be tested, such as connecting, creating users and tournaments",
				resolution:
					"Solved by creating a testing pipeline with Mocha/Chai, that is automated to test first the connection to the database and then creates a new user, logs in, creates a tournament and finally deletes the testuser. Each step is verified to work, and if not then the test pipeline alerts about the issue in the console.",
				images: [
					{
						src: path + "connect_register.PNG",
						desc: "Connect and register tests",
						alt: "connect and register tests",
					},
					{
						src: path + "login_tournament_addition.PNG",
						desc: "Login and tournament addition tests",
						alt: "login and tournament addition tests",
					},
					{
						src: path + "user_deletion.PNG",
						desc: "User deletion test",
						alt: "user deletion test",
					},
				],
			},
			{
				title: "Frontend testing",
				desc: "Frontend functionality must be tested, such as logging in, tournament functionalites and caching",
				resolution:
					"Solved by using Cypress to run automated tests on the aspects of the application that are regularly changing and need quick and effective testing.",
				images: [
					{
						src: path + "cypress_login.PNG",
						desc: "Login tests",
						alt: "login test",
					},
					{
						src: path + "cypress_profile.PNG",
						desc: "Profile tests",
						alt: "profile test",
					},
					{
						src: path + "cypress_guest.PNG",
						desc: "Guest login tests",
						alt: "guest login tests",
					},
				],
			},
			{
				title: "Router architecture",
				desc: "Since Svelte doesn´t come with a router out of box, the application needed to have a router added in. It also needs a clear architecture for adding new routes.",
				resolution:
					"For this I used svelte-spa-router package, that provides a routing system for Svelte. As for the architecture, I decided use a system that resembles the way Angular does routing with the routes defined in a file with corresponding component directly linked to the specified endpoint. The router output is provided in the root of the application to easily change between different views",
				images: [
					{
						src: path + "router_routes.PNG",
						desc: "Router file",
						alt: "router file",
					},
					{
						src: path + "router_output.PNG",
						desc: "Router output in app root",
						alt: "router output in app root",
					},
				],
			},
			{
				title: "Frontend architecture",
				desc: "Frontend needed clear architecture to seperate different functionalities and app structure",
				resolution:
					"Since Svelte provides very little seperation out of the box, I divided the apps source files in to three different categories. Two of these are component directories, core and reusable. Core components are the main views of the app, and reusables are smaller components that are used all through out the application. The final category is utils, which contains functionality that is detached from the components, such as the router, stores and cache.",
				images: [
					{
						src: path + "architecture_folders.PNG",
						desc: "Main folders",
						alt: "main folders",
					},
					{
						src: path + "architecture_core.PNG",
						desc: "Core components",
						alt: "core components",
					},
					{
						src: path + "architecture_reusable.PNG",
						desc: "Reusable components",
						alt: "resusable components",
					},
					{
						src: path + "architecture_utils.PNG",
						desc: "Utils folder",
						alt: "utils folder",
					},
				],
			},
			{
				title: "Application architecture",
				desc: "I was responsible for choosing the application architecture",
				resolution:
					"I chose technologies that best fit the kind of application we were building, and hosted them on services that we available to us as students.",
				images: [
					{
						src: path + "touras_architecture.drawio.png",
						desc: "Architecture schema",
						alt: "architecture schema",
					},
				],
			},
		],
	},
	{
		id: 1,
		title: "Web Dev Beginner Forum",
		desc: "This project was made as the finish project of an Angular development course. I got inspired by sites such as Stack Overflow, to try and recreate a application that was similar in concept. The application is meant for absolute beginners, such as students etc, to ask questions and receive answer and add to the conversation between their peers and more experienced people. The application is meant to be an accepting environment for newcomers. This project was mainly meant for my own personal learning experience where I could test the things I have learned during the course, and experiment with my own ideas.",
		ghLink: "https://github.com/EemiSalonen/angular_forum",
		issues: [
			{
				title: "Login system",
				desc: "I wanted to simulate a login system to sort and label posts",
				resolution:
					"I created a login system with Angular forms and a simulated backend database. I used the built in functionality in Angular to validate user input and the HTTP library to post new users to the database and search and return the correct user when logging in. The system also ensures that the chosen username is unique and that the passwords matches when registering.",
				images: [
					{
						src: path + "ang_forum_login.PNG",
						desc: "Login form",
						alt: "loginform",
					},
					{
						src: path + "ang_form.PNG",
						desc: "Form validation",
						alt: "formvalidation",
					},
				],
			},
			{
				title: "Login guard",
				desc: "The application needed a system to block routes when the user was not logged in.",
				resolution:
					"To solve this issue I used the guard functionality in Angular to protect correct from being accessed when not logged in.",
				images: [
					{
						src: path + "login_guard_error.PNG",
						desc: "Login required error",
						alt: "loginreqerror",
					},
					{
						src: path + "user_management.PNG",
						desc: "User management variables",
						alt: "usermanagement",
					},
					{
						src: path + "login_guard.PNG",
						desc: "Login guard",
						alt: "loginguard",
					},
				],
			},
			{
				title: "Forum architecture",
				desc: "I wanted to make the application out of reusable components.",
				resolution:
					"I created a core forum component which can be added to create new subjects on the site such as the current one HTML, CSS, JavaScript. I wrote the forums functionality in to this core component to reduce the amount of redundancy in the application.",
				images: [],
			},
		],
	},
];
