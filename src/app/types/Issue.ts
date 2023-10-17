import { IssueImg } from "./IssueImg";

export interface Issue {
	title: string;
	desc: string;
	resolution: string;
	images: IssueImg[];
}
