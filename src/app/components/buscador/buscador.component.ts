import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  texto: string;
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params['texto'];
      this.heroes = this.heroesService.buscarHeroe(this.texto);
      console.log(this.heroes);
    });
  }

}
