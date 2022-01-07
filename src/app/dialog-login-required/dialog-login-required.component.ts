import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login-required',
  templateUrl: './dialog-login-required.component.html',
})
export class DialogLoginRequiredComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    setTimeout( () => {
      this.router.navigate(['login']);
    }, 2000);
    
  }

}
