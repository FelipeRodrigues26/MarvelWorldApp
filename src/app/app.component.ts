import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-world-app';
  
  viewWelcome = true;

  ngOnInit() {
    this.router.navigate(['/']);
  }

  constructor(private router:Router){

  }
  // onSubmit() {
  //   this.salvar();
  // }
  // salvar() {
  //   console.log(this.item.genero, this.item.nome);
  //   this.db.list(this.catSelecionado).push(this.item)
  //     .then((result: any) => {
  //       console.log(result.key);
  //     });
  // }

  // deletar(key: string) {
  //   this.db.object(`games/${key}`).remove();
  // }


  onViewWelcome() {
    this.viewWelcome = false;
    this.router.navigate(['/personagem/lista']);
  }
}
