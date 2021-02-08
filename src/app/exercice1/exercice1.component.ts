import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public lien: string = "https://dyma.fr";

  public google = () => {
    this.lien = "https://google.fr";
  };
  constructor() {}

  ngOnInit(): void {}
}
