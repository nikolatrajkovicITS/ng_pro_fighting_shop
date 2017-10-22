import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
