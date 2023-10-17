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
		],
	},
];
