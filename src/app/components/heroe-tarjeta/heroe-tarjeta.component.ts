import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe: Heroe;
 @Input() index: number;


  constructor(private router: Router) {}

  ngOnInit() {
  }

  verHeroe(){
      this.router.navigate( ['/heroe', this.index] );
  }

}
