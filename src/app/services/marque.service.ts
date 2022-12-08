import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Telephone } from '../model/telephone.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TelephoneWrapper } from '../model/telephoneWrapped.model';
import { apiURL } from '../config';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  //apiURL: string = 'http://localhost:8080/telephones/api';
  apiURLTel: string = 'http://localhost:8080/telephones/api/tel';

  telephones! : Marque[];
  //telephonescat! : Telephone[];


  constructor(private http : HttpClient) {


   /* this.telephonescat = [
      {idTel : 1, nomTel : "Android"},
      {idTel : 2, nomTel : "IOS"}
    ]; */

   /*this.telephones = [
      {idMarque : 1, nomMarque : "Samsung Galaxy A20", prixMarque : 550.0, dateCreation : new Date("01/14/2019"), 
      telephone : {idTel : 1, nomTel : "Android"} },
      {idMarque : 2, nomMarque : "iPhone 12pro max", prixMarque : 3000, dateCreation : new Date("12/17/2021"), 
      telephone : {idTel : 1, nomTel : "IOS"}},
      {idMarque : 3, nomMarque : "Samsung Galaxy s22 ultra", prixMarque : 4999.0, dateCreation : new Date("09/20/2022"), 
      telephone : {idTel : 1, nomTel : "Android"}}

    ]; */
   }



   listeMarque(): Observable<Marque[]>{
    return this.http.get<Marque[]>(apiURL);
    }

  
   ajouterMarque( m: Marque):Observable<Marque>{
    return this.http.post<Marque>(apiURL, m, httpOptions);
    }

    supprimerMarque(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      

    consulterMarque(id: number): Observable<Marque> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Marque>(url);
        }
   
    updateMarque(m :Marque) : Observable<Marque>
        {
        return this.http.put<Marque>(apiURL, m, httpOptions);
        }
  

    trierMarques(){
      this.telephones = this.telephones.sort((a,b) => {
        if (a.idMarque! > b.idMarque!) {

          return 1;
        }
        if (a.idMarque! < b.idMarque!){
          return -1;
        }
      return 0;
        
      } )
    
}





  listeTelephonescat():Observable<TelephoneWrapper>{
    return this.http.get<TelephoneWrapper>(this.apiURLTel);
    }
  

  rechercherParTelephone(idTel: number): Observable<Marque[]> {
    const url = `${apiURL}/marquestel/${idTel}`;
    return this.http.get<Marque[]>(url);
  }

  rechercherParNom(nom: string):Observable< Marque[]> {
    const url = `${apiURL}/marquesByName/${nom}`;
    return this.http.get<Marque[]>(url);
    }
}
