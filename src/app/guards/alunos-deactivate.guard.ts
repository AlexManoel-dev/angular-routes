import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './Iform-candeactivate';

@Injectable({providedIn: 'root'})
// É preciso a implementação da interface dentro do CanDeactivate
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Guarda de desativação');

        //return !component.formMudou;
        //return component.podeMudarRota();
        // Aqui está sendo chamado o método que foi declarado dentro da interface, e feito dentro do aluno-form.component.ts
        return component.podeDesativar();
    }
}