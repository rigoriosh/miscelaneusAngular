import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <i class="fa fa-2x fa-star"></i>
    <h1>lifeCicle <small>angular</small></h1>
    <hr>
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p appResaltado>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem inventore nam optio fugiat ratione dolore, minus corporis perspiciatis voluptate, officiis voluptatum. Quae rerum officiis cumque tempora ipsa veritatis alias.
    </p>
    <app-clases></app-clases>
    <p [appResaltado]="'orange'" class="mt-5">
      CREANDO DIRECTIVAS <small>'ng g d miUbicacion'</small>
    </p>
    <h1>ngswit</h1>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    console.log('ngOnInit');
  }

  ngOnChanges(): void{
    console.log('ngOnChanges');

  }

  ngDoCheck(): void{
    console.log('ngDoCheck');        

  }
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit');        

  }
  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked');        

  }
  ngAfterViewInit(): void{
    console.log('ngAfterViewInit');        

  }
  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked');        

  }
  ngOnDestroy(): void{
    console.log('ngOnDestroy');        

  }

}
