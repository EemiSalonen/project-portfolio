import { Component } from "@angular/core";

@Component({
	selector: "app-project-selection",
	templateUrl: "./project-selection.component.html",
	styleUrls: ["./project-selection.component.css"],
})
export class ProjectSelectionComponent {
	public tourasIcons = [
		{
			iconSrc:
				"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
			alt: "sveltelogo",
		},
		{
			iconSrc: "../../assets/icons/mongo.png",
			alt: "mongologo",
		},
		{
			iconSrc: "../../assets/icons/express.png",
			alt: "expresslogo",
		},
	];

	public flagguesserIcons = [
		{
			iconSrc:
				"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
			alt: "sveltelogo",
		},
		{
			iconSrc: "../../assets/icons/mongo.png",
			alt: "mongologo",
		},
		{
			iconSrc: "../../assets/icons/express.png",
			alt: "expresslogo",
		},
		{
			iconSrc: "../../assets/icons/mongoose.png",
			alt: "mongooselogo",
		},
	];
}
