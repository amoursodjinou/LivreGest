import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyDPnD1b8iJCCEdQtChFfyticAvG85NJdD8",
      authDomain: "livre-9e56d.firebaseapp.com",
      projectId: "livre-9e56d",
      storageBucket: "livre-9e56d.appspot.com",
      messagingSenderId: "646587643731",
      appId: "1:646587643731:web:4ff46cc5965e55bebb13a6",
      measurementId: "G-KNKPPM77WT"
    };
    firebase.initializeApp(config);
  }
}
