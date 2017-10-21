import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;                   // Assign current login user to the "this.user" Observable
   }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());          // It's going to redirecting the user on one of the Auth providers like "Google, Facebook..."
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
