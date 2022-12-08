import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
})
export class AddMarqueComponent implements OnInit{

  newMarque = new Marque();
  telephonescat! : Telephone[];
  newIdTel! : number;
  newTelephone! : Telephone;

  constructor(private marqueService: MarqueService,
              private router : Router) { }

  ngOnInit(): void {
   this.marqueService.listeTelephonescat().subscribe(tels => {console.log(tels);
    this.telephonescat = tels._embedded.telephonescat;
   });

  }



  addMarque(){
    this.newMarque.telephone = this.telephonescat.find(tel => tel.idTel == this.newIdTel)!;
    this.marqueService.ajouterMarque(this.newMarque).subscribe(m => {
    console.log(m);
    this.router.navigate(['telephones']);
    });
    }

}
