import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Personagem } from '../models/personagem';
import { PersonagemService } from '../services/personagem.service';


@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.css'],
  providers: [NgbCarouselConfig]
})

export class ListaPersonagensComponent implements OnInit, OnDestroy {

  subscriptionPersonagens: Subscription = new Subscription;
  personagem = {} as Personagem;
  personagens: Personagem[] = [];
  results!: number;
  searchName: string = '';

  constructor(private personagemService: PersonagemService) {

  }

  ngOnInit() {
    this.getPersonagens()
  }

  getPersonagens() {
    this.subscriptionPersonagens = this.personagemService.getPersonagens().subscribe((personagens: Personagem[]) => {
      this.personagens = personagens
      this.results = this.personagens.length;
    });
     (this.personagens.length)
  }

  getPersonagensByName() {
    if (this.searchName == '')
      return this.getPersonagens();
    this.subscriptionPersonagens = this.personagemService.getPersonagensByName(this.searchName).subscribe((personagens: Personagem[]) => {
      this.personagens = personagens
      this.results = this.personagens.length;
    });
    this.searchName = '';

  }

  ngOnDestroy(): void {
    this.subscriptionPersonagens.unsubscribe();
  }

}
