import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ]
    }
];
