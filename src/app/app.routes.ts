import { Routes } from '@angular/router';
import {DisciplinesComponent} from "./pages/disciplines/disciplines.component";
import {TestingComponent} from "./pages/testing/testing.component";
import {MygroupComponent} from "./pages/mygroup/mygroup.component";
import {ScheduleComponent} from "./pages/schedule/schedule.component";
import {MypersonalpageComponent} from "./pages/mypersonalpage/mypersonalpage.component";
import {SessionComponent} from "./pages/session/session.component";
import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";
import {LandingComponent} from "./pages/landing/landing.component";

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:LandingComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'disciplines',
                component: DisciplinesComponent,
            },
            {
                path: 'testing',
                component: TestingComponent,
            },
            {
                path: 'mygroup',
                component: MygroupComponent
            },
            {
                path: 'schedule',
                component: ScheduleComponent,
            },
            {
                path: 'mypersonalpage',
                component: MypersonalpageComponent,
            },
            {
                path: 'session',
                component: SessionComponent,
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
