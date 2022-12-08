import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
})  
export class TelephonesComponent  implements OnInit{


  telephones? : Marque[];

  constructor(  private marqueService : MarqueService) {
  
    //this.telephones=[];
   // this.telephones =  this.marqueService.listeMarque();

   }

  ngOnInit(): void {
   
    this.chargerMarques();
  }

  chargerMarques(){
    this.marqueService.listeMarque().subscribe(marques => {
      console.log(marques);
      this.telephones = marques;
      });
  }

  supprimerMarque(m: Marque)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.marqueService.supprimerMarque(m.idMarque).subscribe(() => {
console.log("produit supprimé");
this.chargerMarques();
});
} 

}
