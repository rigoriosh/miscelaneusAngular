import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private miRouter: ActivatedRoute) {
    this.miRouter.parent?.params.subscribe(s => {
      console.log('rute childe', s);
    });
  }

  ngOnInit(): void {
  }

}
