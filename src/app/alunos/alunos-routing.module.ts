import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
                component: AlunoDetalheComponent
            },
            {
                path: ':id/editar',
                component: AlunoFormComponent
            }
        ]
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
