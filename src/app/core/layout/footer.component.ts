import { Component } from "@angular/core";
import { DividerModule } from "primeng/divider"

@Component({
    standalone: true,
    selector: "app-layout-footer",
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css",
    imports: [DividerModule]
})
export class FooterComponent {
}
