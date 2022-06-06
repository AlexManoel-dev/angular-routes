import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cursosRoutes: Routes = [
  {
    path: 'naoEncontrado',
    component: CursoNaoEncontradoComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'curso/:id',
    component: CursoDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
