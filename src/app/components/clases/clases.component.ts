import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {
  alert: string;
  propiedadesStilos: any;
  cargando: boolean;
  constructor() {
    this.alert = 'alert-danger';
    this.propiedadesStilos = {
      danger: true
    };
    this.cargando = false;
   }

  ngOnInit(): void {
  }

  ejecutaProceso(){
    this.cargando = !this.cargando;
    setTimeout(() => this.cargando = !this.cargando, 3000 );
  }

}
