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

export class ListaPersonagensComponent implements OnInit, OnDestroy{
  
  subscriptionPersonagens: Subscription = new Subscription; 
  personagem = {} as Personagem;
  personagens: Personagem[] = [];
  
  //images = ["capitao", "aranha","hulk"].map((dado) => `assets/img/${dado}.png`);
  //private item: Personagem = new Personagem();
  // personagem$: Observable<Personagem[]>;
  // constructor(firestore: Firestore) {
  //    const collection = collection(firestore, 'personagens');
  //    this.item$ = collectionData(collection);
  // }
  constructor(private personagemService: PersonagemService) {
  
  }

  ngOnInit() {
    this.getPersonagens()
  }
 
  getPersonagens() {
    this.subscriptionPersonagens = this.personagemService.getPersonagens().subscribe((personagens: Personagem[]) => {
      this.personagens = personagens
    });
  }

  ngOnDestroy(): void {
    this.subscriptionPersonagens.unsubscribe();
  }

}
