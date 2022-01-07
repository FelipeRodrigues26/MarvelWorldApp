import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp, FirebaseAppModule } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonagensComponent } from './lista-personagens/lista-personagens.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonagemDetalhesComponent } from './personagem-detalhes/personagem-detalhes.component';
import { LoginComponent } from './login/login.component';
import { AutenticationServiceService } from './services/autentication-service.service';
import { DialogLoginRequiredComponent } from './dialog-login-required/dialog-login-required.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonagensComponent,
    PersonagemDetalhesComponent,
    LoginComponent,
    DialogLoginRequiredComponent,
    
  ],
  imports: [
    provideFirebaseApp(() => initializeApp({}) ),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
