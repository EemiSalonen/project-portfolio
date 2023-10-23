import { Component, Input } from "@angular/core";
import { Project } from "../types/Project";
import { ActivatedRoute } from "@angular/router";
import { projects } from "../projects/projects";
import { IssueImg } from "../types/IssueImg";

@Component({
	selector: "app-project",
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
	@Input() title!: string;

	open = "";

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
	public selectedImg!: IssueImg | null;

	public getProject() {
		let param: number;
		this.route.params.subscribe((params) => (param = Number(params["id"])));

		this.proj = projects.find((proj) => proj.id === param) || this.placeholder;
	}

	public openIssue(title: string) {
		if (this.open === title) {
			this.open = "";
		} else {
			this.open = title;
		}
	}

	public selectImage(img: IssueImg) {
		this.selectedImg = img;
	}

	public closeImage() {
		this.selectedImg = null;
	}
}
