import { ApiConnectionService } from './../api-connection.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  @Input() apiConnection: ApiConnectionService;

  constructor() {
  }

  ngOnInit() {
    console.log(this.apiConnection);

  }

  connexion(username, password) {

    let errorMessage = document.getElementById("errorMessage");
    if (username == "" && password == "") {
      errorMessage.textContent = "Veuillez saisir les deux champs";
    } else if (username == "") {
      errorMessage.textContent = "Veuillez saisir l'email";

    } else if (password == "") {
      errorMessage.textContent = "Veuillez saisir le mot de passe";

    } else {
      this.apiConnection.getToken(username, password);
    }
  }
}
