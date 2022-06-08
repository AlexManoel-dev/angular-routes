 import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
// Não é necessário declarar os life cicles no angular 2
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    // Assim, essas informações só estão sendo carregadas quando o componente é criado
    // Não preciso mais pegar o ID pra depois pegar o aluno, eu posso já pegar o aluno
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
        // O aluno que está dentro do info, é o aluno criado dentro da rota no resolve
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
