import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTranferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 1;

  constructor (private service: TransferenciaService){

  }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valoEmitir).subscribe(resultado=>{ console.log(resultado);
  });
}
