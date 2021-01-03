import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private miRouter: ActivatedRoute) {
    this.miRouter.parent?.params.subscribe(s => {
      console.log('rute childe', s);
    });
    // this.miRouter.parent.params.subscribe(p => console.log('Rute child', p));
  }

  ngOnInit(): void {
  }

}
