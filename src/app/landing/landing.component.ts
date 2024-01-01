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

	public navigate(path: string) {
		console.log(path);
		this.router.navigateByUrl(path);
	}
}
