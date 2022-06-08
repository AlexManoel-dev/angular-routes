import { IFormCanDeactivate } from './../../guards/Iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
// Se quiser usar a interface em qualquer lugar que tenha um form, basta declarar ele na classe do component
// E chamar a guard no arquivo da rota em questão
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription = new Subscription();
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        console.log(this.aluno);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?')
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
