import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { CardComponent } from "./card/card.component";
import { ProjectComponent } from "./project/project.component";

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		CardComponent,
		ProjectComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
