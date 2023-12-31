import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosGrillaComponent } from './components/productos/productos.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component'
import { RegistroeventsComponent } from './components/registroevents/registroevents.component';
import { EventoWasimodoComponent } from './components/evento-wasimodo/evento-wasimodo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'productos', component:ProductosGrillaComponent},
    {path: 'error-pagina404', component:ErrorPagina404Component},
    {path: ' ProductosComponent', component: ProductosGrillaComponent },
    {path:'registroEventos', component: RegistroeventsComponent},
    {path: 'eventos', component: EventoWasimodoComponent},
    {path: 'eventos/:nombre', component: DetalleEventoComponent},
    {path: 'registro-usuarios', component: RegistroComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'menu', component:MenuComponent},
    {path: 'gestion-productos-vista', component: GestionProductosVistaComponent},
    {path:'**', redirectTo:'404',pathMatch:'full'}
];




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
