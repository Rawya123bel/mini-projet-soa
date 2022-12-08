import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { FormsModule } from '@angular/forms';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParTelephoneComponent } from './recherche-par-telephone/recherche-par-telephone.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    TelephonesComponent,
    AddMarqueComponent,
    UpdateMarqueComponent,
    RechercheParTelephoneComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
