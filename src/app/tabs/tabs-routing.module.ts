import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/inicio/inicio.module').then(m => m.InicioPageModule)
          },
          {
            path: 'eventos',
            loadChildren: () => import('../pages/eventos/eventos.module').then( m => m.EventosPageModule),
          },
          {
            path: 'mesa-directiva',
            loadChildren: () => import('../pages/mesa-directiva/mesa-directiva.module').then( m => m.MesaDirectivaPageModule)
          },
          {
            path: 'redes-sociales',
            loadChildren: () => import('../pages/redes-sociales/redes-sociales.module').then( m => m.RedesSocialesPageModule)
          },
          {
            path: 'contacto',
            loadChildren: () => import('../pages/contacto/contacto.module').then( m => m.ContactoPageModule)
          },
          {
            path: 'alianzas',
            loadChildren: () => import('../pages/alianzas/alianzas.module').then( m => m.AlianzasPageModule)
          },
        ],
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('../pages/usuario/usuario.module').then(m => m.UsuarioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
