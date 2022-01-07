import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonagensComponent } from './lista-personagens/lista-personagens.component';
import { LoginComponent } from './login/login.component';
import { PersonagemDetalhesComponent } from './personagem-detalhes/personagem-detalhes.component';
import { OnlyLoggedInUsersGuardService } from './services/guards/only-logged-in-users-guard.service';

const routes: Routes = [


  
  { path: 'login', component: LoginComponent },
  
  
  { path: 'personagem/lista', component: ListaPersonagensComponent},
  
  {
    path: 'personagem/detalhes/:id',
    component: PersonagemDetalhesComponent ,
    canActivate: [OnlyLoggedInUsersGuardService],
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
