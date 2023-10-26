import { Component, Input } from "@angular/core";
import { Icon } from "../types/Icon";
import { Project } from "../types/Project";
import { Router } from "@angular/router";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	constructor(private router: Router) {}

	@Input() title!: string;
	@Input() imgsrc!: string;
	@Input() minDesc!: string;
	@Input() desc!: string;
	@Input() icons!: Icon[];
	@Input() projectId!: number;

	openProject(id: number) {
		this.router.navigateByUrl(`/project/${id}`);
	}
}
