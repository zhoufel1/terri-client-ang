import { Component } from "@angular/core";
import { FloatLabelModule } from "primeng/floatlabel";
import { PasswordModule } from "primeng/password"
import { InputTextModule } from "primeng/inputtext"
import { CheckboxModule } from "primeng/checkbox"

@Component({
    standalone: true,
    selector: "app-login-page",
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
    imports: [
        FloatLabelModule, 
        PasswordModule, 
        InputTextModule,
        CheckboxModule 
    ]
})
export class LoginComponent { }