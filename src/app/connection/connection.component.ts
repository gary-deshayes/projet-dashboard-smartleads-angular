import { ApiConnectionService } from './../api-connection.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  @Input() apiConnection: ApiConnectionService;

  private error = false;
  private errorMessage: any;

  constructor() {
  }

  ngOnInit() {

  }

  connexion(username, password) {
    


    if (username == "" && password == "") {
      this.error = true;
      this.errorMessage = "Veuillez saisir les deux champs";

    } else if (username == "") {
      this.error = true;
      this.errorMessage = "Veuillez saisir l'email";

    } else if (password == "") {
      this.error = true;

      this.errorMessage = "Veuillez saisir le mot de passe";

    } else {
      this.error = false;
      this.errorMessage = undefined;
      this.apiConnection.getToken(username, password);
    }
  }
}
