import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet
  ],
  template: `
    <mat-toolbar color="primary">
      SingUp Student Portal NSTU
      <button mat-button>
        <mat-icon>login</mat-icon>
        Login
      </button>
    </mat-toolbar>
    <h1>Страница находится в разработке</h1>
    <p>
      login works! 
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-toolbar{
      justify-content: space-between;
    }
  `]
})
export class LoginComponent {

}
