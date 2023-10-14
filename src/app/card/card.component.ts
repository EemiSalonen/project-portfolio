import { Component, Input } from "@angular/core";
import { Icon } from "../types/Icon";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() title!: string;
	@Input() imgsrc!: string;
	@Input() minDesc!: string;
	@Input() desc!: string;
	@Input() ghLink!: string;
	@Input() icons!: Icon[];
}
