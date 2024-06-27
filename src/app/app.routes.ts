import { Routes } from '@angular/router';
import { TopComponent } from '../components/top/top.component';
import { HomeComponent } from '../components/home/home.component';
import { GameComponent } from '../components/game/game.component';

export const routes: Routes = [
    { path: 'top', component: TopComponent },
    { path: 'home', component: HomeComponent },
    { path: 'game', component: GameComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];