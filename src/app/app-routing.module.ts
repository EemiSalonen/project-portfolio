import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectSelectionComponent } from "./project-selection/project-selection.component";

const routes: Routes = [
	{ path: "", component: LandingComponent },
	{ path: "project/:id", component: ProjectComponent },
	{ path: "projects", component: ProjectSelectionComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
