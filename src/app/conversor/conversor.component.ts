import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {


  real: number = 0;
  resp: number = 0;

  dolar(){


    (<HTMLInputElement>document.getElementById("resp")).value = (this.real*0.2)+" Dólares";
  }

  euro(){

    this.resp = (this.real*0.18)
  }


  iene(){

    this.resp = (this.real*26.29)
  }
}
