import { Component } from '@angular/core';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {


  valor: number = 0;
  cambio : number = 0;
  resp: number = 0;


  converter(){
      this.resp = this.valor * this.cambio;

  }
  rd(){
    this.cambio = 0.1988;

  }
  dr(){
    this.cambio = 5.03;
  }
  re(){
    this.cambio = 0.18;

  }


}


