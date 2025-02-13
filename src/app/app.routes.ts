import { Routes } from '@angular/router';
import { CursoAdicionarComponent } from './curso/curso-adicionar/curso-adicionar.component';
import { CursoListarComponent } from './curso/curso-listar/curso-listar.component';
import { CursoEditarComponent } from './curso/curso-editar/curso-editar.component';

export const routes: Routes = [
    { path: 'curso/adicionar', component: CursoAdicionarComponent },
    { path: 'curso/listar', component: CursoListarComponent },
    { path: 'curso/editar/:id', component: CursoEditarComponent }
];
