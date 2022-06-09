import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // Se você quiser incluir o guard com a rota pai, faça aqui
    // Senão, coloque o cantActiveteChild dentro do arquivo de routes do escopo que deseja
    // E então, será executado somente quando a rota filha ser chamada
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  // A verificação das rotas são feitas linha a linha, portanto, é melhor deixar os hardcoded encima
  // Se você quiser, é possível criar uma rota padrão, sem que seja somente /
  // Basta fazer:
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Porque senão, se o usuário a rota vazia, vai cair no pagina-nao-encontrada
  /*{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },*/
  // Nesse caso, o usuário está sendo redirecionado ao componente de página não encontrada
  // Mas se você desejar, pode fazer com que ele seja enviado para a tela de login
  // Basta adicionar o canActivate com o AuthGuard
  /*{
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard]
  },*/
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

// O padrão do angular é não utilizar a hash nas rotas.
// Mas dependendo do tipo de backend, ele não reconhece se a rota é uma chamada ajax ou rota de redirecionamento
// Portanto se precisar, basta acrescentar
/*@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
