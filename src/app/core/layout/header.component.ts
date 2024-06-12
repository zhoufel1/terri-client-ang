import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button"

@Component({
    standalone: true,
    selector: "app-layout-header",
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
    imports: [ButtonModule]
})
export class HeaderComponent {
}