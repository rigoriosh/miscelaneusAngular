import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private miRouter: ActivatedRoute) {
    this.miRouter.parent?.params.subscribe(s => {
      console.log('rute childe', s);
    });
  }

  ngOnInit(): void {
  }

}
