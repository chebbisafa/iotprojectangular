import { Routes, RouterModule } from '@angular/router';
import {ContactModule} from "../../Contact/contact.module";
import { AuthGuard } from './auth.guard';
//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [

  {
    path: 'dashboard',
    loadChildren: "./View/dashboard/dashboard.module#DashboardModule",
    canActivate:[AuthGuard],
  },

  {
    path: 'charts',
    loadChildren: './View/charts/charts.module#ChartsNg2Module',
    canActivate:[AuthGuard]
  },

  {
    path: 'Contact',
    loadChildren: './View/Contact/contact.module#ContactModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'Users',
    loadChildren: './View/Users/users.module#UsersModule',
    canActivate:[AuthGuard]
  },
  {
  path: 'devices',
  loadChildren: './View/Devices/devices.module#DevicesModule',
  canActivate:[AuthGuard]
},

  {
    path: 'pages',
    loadChildren: './View/pages/full-pages/full-pages.module#FullPagesModule'
  },







];
