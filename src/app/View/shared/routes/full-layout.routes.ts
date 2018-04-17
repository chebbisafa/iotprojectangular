import { Routes, RouterModule } from '@angular/router';
import {ContactModule} from "../../Contact/contact.module";

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './View/dashboard/dashboard.module#DashboardModule'

  },

  {
    path: 'charts',
    loadChildren: './View/charts/charts.module#ChartsNg2Module'
  },

  {
    path: 'Contact',
    loadChildren: './View/Contact/contact.module#ContactModule'
  },
  {
    path: 'Users',
    loadChildren: './View/Users/users.module#UsersModule'
  },
  {
  path: 'devices',
  loadChildren: './View/Devices/devices.module#DevicesModule'
},

  {
    path: 'pages',
    loadChildren: './View/pages/full-pages/full-pages.module#FullPagesModule'
  },







];
