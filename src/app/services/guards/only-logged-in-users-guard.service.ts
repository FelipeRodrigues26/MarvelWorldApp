import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AutenticationServiceService } from '../autentication-service.service';
import { UserServiceService } from '../user-service.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardService implements CanActivate{

  constructor(private authService: AutenticationServiceService,  private router: Router) {};
  
  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.authService.isUserLogged()) {
      return true;
    } else {
      console.log("Não autorizado");
      this.router.navigate(['login']);
      return false;
    }
  }

}
