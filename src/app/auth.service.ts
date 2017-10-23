import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'; 
import * as firebase from 'firebase'; 


@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,                 // With ActivatedRoute we can get the current route and extract returend URL param
    private router: Router) {             
    this.user$ = afAuth.authState;                 // Assign current login user to the "this.user" Observable
   }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());      // It's going to redirecting the user on one of the Auth providers like "Google, Facebook..."
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  get appUser$() : Observable<AppUser> {
    return this.user$                                           // It's a firebase user object, This user object is the user that is represented by firebase as part of authenitcation, it's not a user object that we stoe in our db.
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);        // switchMap mapping as the name implies, But it also switches to to this new observable: "in next line"

        return Observable.of(null);
      });   
  }
  
}
