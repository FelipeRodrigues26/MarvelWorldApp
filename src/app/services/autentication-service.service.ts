import { Injectable } from '@angular/core';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { EmailAuthProvider } from "@angular/fire/auth";
import { Firestore, FirestoreInstances, collection, getFirestore } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { FirebaseSignInProvider } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationServiceService {

  constructor(){
    initializeApp({
      
        apiKey: "AIzaSyAOKzfvrTwRWsmUxG7LJPBdQcEDsCKFbuM",
        authDomain: "authmarvel.firebaseapp.com",
        projectId: "authmarvel",
        storageBucket: "authmarvel.appspot.com",
        messagingSenderId: "503133354528",
        appId: "1:503133354528:web:aa8332145b856c1dd8da45",
        measurementId: "G-8XH8HQPM62",
      
    });
  }

  signIn(email: string, password: string){
    const auth = getAuth();
    return  signInWithEmailAndPassword(auth, email, password);
  }

  signOut() {
    const auth = getAuth();
    signOut(auth).then(
      () => { ("Usuario logout sucess")}
    ).catch(error => 
       ("Erro ao deslogar"+error)
    )
  }

  isUserLogged():boolean{
    const auth = getAuth();
    if (auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
