import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-landing",
	templateUrl: "./landing.component.html",
	styleUrls: ["./landing.component.css"],
})
export class LandingComponent {
	constructor(private router: Router) {}

	public projectsPath = "/projects";
	public contactPath = "/contact";

	public tourasIcons = [
		{
			iconSrc:
				"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
			alt: "sveltelogo",
		},
		{
			iconSrc: "../../assets/express.png",
			alt: "expresslogo",
		},
		{
			iconSrc: "../../assets/mongo.png",
			alt: "mongologo",
		},
	];

	public flagguesserIcons = [
		{
			iconSrc:
				"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
			alt: "sveltelogo",
		},
		{
			iconSrc: "../../assets/express.png",
			alt: "expresslogo",
		},
		{
			iconSrc: "../../assets/mongo.png",
			alt: "mongologo",
		},
		{
			iconSrc: "../../assets/mongoose.png",
			alt: "mongooselogo",
		},
	];

	public navigate(path: string) {
		this.router.navigateByUrl(path);
	}
}
