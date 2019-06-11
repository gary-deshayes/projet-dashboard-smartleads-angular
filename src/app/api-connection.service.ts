import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  private connected = false;
  private loading = false;
  private errorConnection: any;

  private token = "";

  private lien = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {
    if(localStorage.getItem("token") != undefined){
      this.token = localStorage.getItem("token");
      this.connected = true;
    }

  }

  getToken(username, password) {
    
    let json = '{"username":"' + username + '", "password" : "' + password + '"}';
    let obj = JSON.parse(json);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    this.loading = true;
    this.http.post('http://127.0.0.1:8000/api/token/generate', obj, httpOptions).subscribe(data => {
      this.loading = false;

      //Connexion réussie
      if (data.status == 200) {
        this.connected = true;
        this.token = data.body["token"];
        localStorage.setItem("token", this.token);
      } else {
        this.connected == false;
      }

    },
      (error) => {
        if (error.status == 401) {
          this.errorConnection = "Identifiant invalide, veuillez réessayer.";

        }
        if (error.status == 0 || error.status == 500) {
          this.errorConnection = "Le serveur ne réponds pas, veuillez contacter un administrateur.";

        }
        this.loading = false;

      },
      () => {
        console.log(this.token);
        this.loading = false;

      });

  }

  public getErrorMessage() {
    return this.errorConnection;
  }

  public getIfConnected() {
    return this.connected;
  }

  public deconnected() {
    this.connected = false;
  }


  public getData(url) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.get(this.lien + url, httpOptions)
  }

  public getLoading(): boolean {
    return this.loading;
  }
  public setLoading(loading) {
    this.loading = loading;
  }
}
