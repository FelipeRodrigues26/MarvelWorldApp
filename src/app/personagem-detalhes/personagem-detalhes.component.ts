import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Personagem } from '../models/personagem';
import { PersonagemService } from '../services/personagem.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PersonagemDetalhesComponent implements OnInit {

  subscriptionPersonagens: Subscription = new Subscription; 
  personagem = {} as Personagem;
  series: any[] = [];
  stories: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,private personagemService: PersonagemService, config: NgbModalConfig, private modalService: NgbModal) { 

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    let id: any = null;
    id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPersonagemById(Number.parseInt(id));
    this.getSeriesById(Number.parseInt(id));
    this.getStoriesById(Number.parseInt(id));
  }

  getPersonagemById(id:number){
    this.subscriptionPersonagens = this.personagemService.getPersonagemById(id).subscribe((personagem: Personagem) => {
      this.personagem = personagem
       
    });
  }

  getSeriesById(id:number){
    this.subscriptionPersonagens = this.personagemService.getSeriesQuadrinhosById(id).subscribe((series: any[]) => {
      this.series = series
       
    });
  }

  getStoriesById(id:number){
    this.subscriptionPersonagens = this.personagemService.getHistoriasQuadrinhosById(id).subscribe((stories: any[]) => {
      this.stories = stories
      
    });
  }

  open(content:any) {
    this.modalService.open(content);
  }

}
