import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { WarningComponent } from './warning/warning.component';
import { ProgramScreenComponent } from './program-screen/program-screen.component';
import { FoodListComponent } from './food-list/food-list.component';
import { ErrorDialogComponent } from './core/error-dialog.component';
import { AuthService } from './core/auth.service';
import { TokenStorage } from './core/token.storage';
import { Interceptor } from './core/inteceptor';
import {CustomMaterialModule} from './core/material.module';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { DetailProgramComponent } from './detail-program/detail-program.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnectionComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfilComponent,
    WarningComponent,
    ProgramScreenComponent,
    FoodListComponent,
    FoodDetailComponent,
    DetailProgramComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule
  ],
  providers: [ErrorDialogComponent, AuthService, TokenStorage, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
