import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit{

  nomMarque! : string;
  telephones! :Marque[];
  allMarques! :Marque[];
  searchTerm! :string;

  constructor(private marqueService : MarqueService) { }

  ngOnInit():void {
    this.marqueService.listeMarque().subscribe(marques => {
      console.log(marques);
      this.telephones = marques;
      });
  }

  rechercherMarques() {

    this.marqueService.rechercherParNom(this.nomMarque).
    subscribe(tels => {
      console.log(tels);
      this.telephones=tels;});

    }

    onKeyUp(filterText : string){
      this.telephones = this.allMarques.filter(item =>
      item.nomMarque.toLowerCase().includes(filterText));
      }

  }


