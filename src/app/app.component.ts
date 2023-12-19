import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CustomSidenavComponent} from "./components/custom-sidenav/custom-sidenav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        CustomSidenavComponent
    ],
    template: `
        <mat-toolbar class="mat-elevation-z3">
            <button mat-icon-button (click)="callapsed.set(!callapsed())">
                <mat-icon>menu</mat-icon>
            </button>
        </mat-toolbar>
        <mat-sidenav-container>
            <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
                <app-custom-sidenav [collapsed]="callapsed()"></app-custom-sidenav>
            </mat-sidenav>
            <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
                <router-outlet></router-outlet>
            </mat-sidenav-content>
        </mat-sidenav-container>

    `,
    styles: [
        '.content{ padding: 24px;}',
        'mat-toolbar{position: relative;z-index: 5;}',
        'mat-sidenav-container{height: calc(100vh - 64px)}',
        'mat-sidenav,mat-sidenav-contant{transition: all 500ms ease-in-out}'

    ],
})
export class AppComponent {
    title = 'NSTU Student Portal';

    callapsed = signal(false)
    sidenavWidth = computed(() => this.callapsed() ? '65px' : '250px');
}
