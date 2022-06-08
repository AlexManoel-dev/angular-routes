import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolver
    ],
})
export class AlunosModule { }
