import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-imgview",
	templateUrl: "./imgview.component.html",
	styleUrls: ["./imgview.component.css"],
})
export class ImgviewComponent {
	@Input() imgsrc!: string;
	@Input() alt!: string;
	@Input() desc!: string;

	@Output() closeEvent = new EventEmitter();

	public close() {
		this.closeEvent.emit("test");
	}
}
