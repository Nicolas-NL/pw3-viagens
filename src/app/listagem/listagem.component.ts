import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viagem } from '../app.component';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  static viagens=[
    new Viagem(1, 'Acapulco', 'LAZER', new Date(), new Date(), 2),
    new Viagem(2, 'Egito (Cairo)', 'LAZER', new Date(), new Date(), 3),
    new Viagem(3, 'Nova Zelandia', 'LAZER', new Date(), new Date(), 2),
    new Viagem(4, 'Australia', 'LAZER', new Date(), new Date(), 3),
  ]

  constructor(private router: Router) {}

  get getViagens() {
    return ListagemComponent.viagens;
  }

  detalhar(id: number) {
    this.router.navigateByUrl('/detalhar/' + id);
  }

  excluir(id: number) {
    this.router.navigateByUrl('/excluir/' + id);
  }

}
