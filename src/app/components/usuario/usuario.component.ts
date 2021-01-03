import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private miRouter: ActivatedRoute) {
    this.miRouter.params.subscribe(p => console.log('Ruta padre', p));
  }

  ngOnInit(): void {
  }

}
