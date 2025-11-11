import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nous } from './nous/nous';
import { Entreprises } from './entreprises/entreprises';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    }, {
        path: 'nous-soutenir',
        component: Nous,
    },
    {
        path: 'enterprises',
        component: Entreprises,
    },
    {
        path: 'about',
        component: About,
    },
];
