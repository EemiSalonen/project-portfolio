import { Issue } from "./Issue";

export interface Project {
	id: number;
	title: string;
	desc: string;
	ghLink: string;
	issues: Issue[];
}
