import { Component } from "@angular/core";
import { projects } from "../projects/projects";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent {
  public tourasIcons = [
    {
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
      alt: "sveltelogo",
    },
    {
      iconSrc: "../../assets/express.png",
      alt: "expresslogo",
    },
    {
      iconSrc: "../../assets/mongo.png",
      alt: "mongologo",
    },
  ];

  public flagguesserIcons = [
    {
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
      alt: "sveltelogo",
    },
    {
      iconSrc: "../../assets/express.png",
      alt: "expresslogo",
    },
    {
      iconSrc: "../../assets/mongo.png",
      alt: "mongologo",
    },
    {
      iconSrc: "../../assets/mongoose.png",
      alt: "mongooselogo",
    },
  ];
}
