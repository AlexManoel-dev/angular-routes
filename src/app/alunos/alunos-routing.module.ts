import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        // Rotas filhas(podem ser exibidas juntamente com a rota pai)
        children: [
            {
                path: 'novo',
                component: AlunoFormComponent
            },
            {
                path: ':id',
                component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/editar',
                component: AlunoFormComponent,
                // Aqui se chama o guard
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
