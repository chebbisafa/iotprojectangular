import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [


  { path: '/dashboard/dashboard1', title: 'Accueil', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },



  { path: '/Users/listusers', title: 'Utilisateurs', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },


  {
    path: '', title: 'Devices', icon: 'ft-monitor', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/devices/listdevices', title: 'Liste des devices', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/devices/adddevice', title: 'Ajouter un device', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },



    {
        path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'ChartJs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartist', title: 'Chartist', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/ngx', title: 'NGX Chart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

    { path: '/Contact/contactSSCF', title: 'Contacts', icon: 'fa-envelope-o', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

];
