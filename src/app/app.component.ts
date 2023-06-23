import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-viagens';
}
export class Viagem {
  constructor(id: number, destino: string, tipo: string, dataChegada: Date, dataSaida: Date, qtdPessoas: number) {
    this.id = id;
    this.destino = destino;
    this.tipo = tipo;
    this.dataChegada = dataChegada;
    this.dataSaida = dataSaida;
    this.qtdPessoas = qtdPessoas;
  }
  id: number;
  destino = '';
  tipo = '';
  dataChegada = new Date();
  dataSaida = new Date();
  qtdPessoas: number;
}