import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-recherche-par-telephone',
  templateUrl: './recherche-par-telephone.component.html',
  styles: [
  ]
})
export class RechercheParTelephoneComponent implements OnInit{
  IdTelephone! : number;
  telephonescat! : Telephone[];
  telephones! : Marque[];

  constructor(private marqueService : MarqueService) { }

  ngOnInit(): void {
    this.marqueService.listeTelephonescat().
    subscribe(tels => {this.telephonescat = tels._embedded.telephonescat;
      console.log(tels);
      
});
  }

  onChange() {
  
      this.marqueService.rechercherParTelephone(this.IdTelephone).
      subscribe(tels =>{this.telephones=tels});
      

  }

}
