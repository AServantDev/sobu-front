import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { WarningComponent } from './warning/warning.component';
import { ProgramScreenComponent } from './program-screen/program-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnectionComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfilComponent,
    WarningComponent,
    ProgramScreenComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
