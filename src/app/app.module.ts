import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { CardComponent } from "./card/card.component";
import { ProjectComponent } from "./project/project.component";
import { ImgviewComponent } from './imgview/imgview.component';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		CardComponent,
		ProjectComponent,
  ImgviewComponent,
  ProjectSelectionComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
