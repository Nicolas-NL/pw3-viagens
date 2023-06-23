import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viagem } from '../app.component';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
  static viagens=[
    new Viagem(1, 'Acapulco', 'LAZER', new Date(), new Date(), 2, 1000),
  ]

  constructor(private router: Router) {}

  get getViagens() {
    return ExcluirComponent.viagens;
  }

  detalhar(id: number) {
    this.router.navigateByUrl('/detalhar/' + id);
  }

  excluir(id: number) {
    this.router.navigateByUrl('/excluir/' + id);
  }

}
