import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {
  alert: string;
  opciones: string[];
  constructor() {
    this.alert = 'success';
    this.opciones = ['Seleccione...', 'primary', 'secondary', 'primary', 'success', 'danger', 'warning', 'info', 'light']
   }

  ngOnInit(): void {
  }

  aaa(b: any){
    console.log(b);
  }


}
