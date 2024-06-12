import { Component } from "@angular/core";
import { Button } from "primeng/button"

@Component({
    standalone: true,
    selector: "app-home-page",
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
    imports: [Button]
})
export class HomeComponent {

}