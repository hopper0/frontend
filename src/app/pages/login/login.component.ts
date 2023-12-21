import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterOutlet} from "@angular/router";
import {LandingComponent} from "../landing/landing.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterOutlet,
        LandingComponent,
        ReactiveFormsModule,
        MatInputModule,
        RouterLink,
        NgIf,
    ],
    template: `
        <app-landing></app-landing>
        <h1>Страница находится в разработке</h1>
        <p>
            login works!
        </p>
        <div class="form-container mat-elevation-z5">
            <h1>Login</h1>
            <form [formGroup]="loginForm">
                <mat-form-field>
                    <input matInput placeholder="Email address" formControlName="email"/>
                    <mat-error *ngIf="email?.errors?.['required']">Email is required</mat-error>
                    <mat-error *ngIf="!email?.errors?.['email']">Please enter a correct email format</mat-error>
                </mat-form-field>
                <mat-form-field>
                    <input matInput placeholder="Password" formControlName="password"/>
                    <mat-error *ngIf="!email?.errors?.['password']">Password is required</mat-error>
                </mat-form-field>
                <div class="center margin-top">
                    <button mat-raised-button color="primary" type="submit">Login</button>
                </div>

                <span class="center margin-top">New to our portal? <a class="sing-up-link"
                                                                      routerLink="sing-up">Sing Up!</a></span>
            </form>
        </div>

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
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',Validators.required)
    })

    constructor() {
    }

    ngOnInit() {
    }
    get email() {
        return this.loginForm.get('email')
    }
    get password() {
        return this.loginForm.get('password')
    }
}
