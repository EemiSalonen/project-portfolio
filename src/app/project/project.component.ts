import { Component, Input } from "@angular/core";
import { Project } from "../types/Project";
import { ActivatedRoute } from "@angular/router";
import { projects } from "../projects/projects";

@Component({
	selector: "app-project",
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
	@Input() title!: string;

	constructor(private route: ActivatedRoute) {
		this.getProject();
	}

	public placeholder: Project = {
		id: -1,
		title: "placeholder",
		desc: "placeholder",
		issues: [],
	};

	public proj!: Project;

	public getProject() {
		let param: number;
		this.route.params.subscribe((params) => (param = Number(params["id"])));

		this.proj = projects.find((proj) => proj.id === param) || this.placeholder;
	}
}
