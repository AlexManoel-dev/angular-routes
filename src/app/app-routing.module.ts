import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // LAZY LOADING
  // 1 - Importar o módulo e declarar a rota no app-routing.module.ts com o loadChildren
  // 2 - Retirar todos os imports do módulo de todos os lugares, ex: app.module.ts
  // 3 - Ir no arquivo da rota que você está importando e retirar o nome da rota principal, pois já foi declarado no primeiro passo
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // Se você quiser incluir o guard com a rota pai, faça aqui
    // Senão, coloque o cantActiveteChild dentro do arquivo de routes do escopo que deseja
    // E então, será executado somente quando a rota filha ser chamada
    canActivateChild: [AlunosGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
