import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styles: [
  ]
})
export class UpdateMarqueComponent implements OnInit{

  currentMarque = new Marque();
  telephonescat! : Telephone[];
  updatedTelId! : number;

  constructor(private activatedRoute: ActivatedRoute,
             private router :Router,
             private marqueService: MarqueService) { }

  ngOnInit(): void {

   /* this.marqueService.listeTelephonescat().
    subscribe(tels => {this.telephonescat = tels._embedded.telephonescat;
      console.log(tels);
}); */


    this.marqueService.consulterMarque(this.activatedRoute.snapshot.params['id']).
    subscribe( m =>{ this.currentMarque = m; 
       // this.updatedTelId = this.currentMarque.telephone.idTel;
    } ) ;
  }

  updateMarque() {

   // this.currentMarque.telephone = this.telephonescat.find(tel => tel.idTel == this.updatedTelId)!;
    this.marqueService.updateMarque(this.currentMarque).subscribe(m => {
      this.router.navigate(['telephones']); }
      );
  }

}
