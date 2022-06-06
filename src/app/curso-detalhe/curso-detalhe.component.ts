import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: string = '';
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {
    // Não escuta a alteração do ID
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      // Maneira mais correta de fazer
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
        }
      );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
