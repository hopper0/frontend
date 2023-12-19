import {Component, computed, signal} from '@angular/core';
import {AppComponent} from "../../app.component";
import {RouterOutlet} from "@angular/router";
import {CustomSidenavComponent} from "../../components/custom-sidenav/custom-sidenav.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";



//Основная страница отображения контента
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomSidenavComponent,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
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
  ]
})
export class MainComponent {
  callapsed = signal(false)
  sidenavWidth = computed(() => this.callapsed() ? '65px' : '250px');
}
