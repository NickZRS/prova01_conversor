import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {


  
  resp: string = "";

  dolar(){


    (<HTMLInputElement>document.getElementById("resp")).value = (this.real*0.2)+" Dólares";
  }

  euro(){


  }


  iene(){


  }
}
