import { CursosService } from '../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;
  inscricao: Subscription = new Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
    ) {
    // Não escuta a alteração do ID
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      // Maneira mais correta de fazer
      // Extraindo os urlParams
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];

          // Filtrando o curso pelo ID, por conta do método getCurso() da Service
          this.curso = this.cursosService.getCurso(this.id);

          if(this.curso == null){
            this.router.navigate(['/cursos/naoEncontrado']);
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
