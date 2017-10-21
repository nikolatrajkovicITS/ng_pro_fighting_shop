import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

