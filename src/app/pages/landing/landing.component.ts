import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        RouterOutlet,
        RouterLink,
    ],
    template: `
        <mat-toolbar color="primary">
            SingUp Student Portal NSTU
            <button mat-button routerLink="login">
                <mat-icon>login</mat-icon>
                Login
            </button>
        </mat-toolbar>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
        <p>Страница где будут отображаться компоненты 
        Login,Registration</p>
    `,
    styles: [`

      mat-toolbar {
        justify-content: space-between;
      }

      content {
        padding: 32px;
      }
      
    `]
})
export class LandingComponent {

}
