import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  private connected = false;

  private token = "";

  private lien = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {

  }

  getToken(username, password) {
    let retour = 0;
    let json = '{"username":"' + username + '", "password" : "' + password + '"}';
    let obj = JSON.parse(json);
    console.log(obj);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    this.http.post('http://127.0.0.1:8000/api/token/generate', obj, httpOptions).subscribe(data => {
      console.log(data);

      //Connexion réussie
      if (data.status == 200) {
        this.connected = true;
        retour = 1;
        this.token = data.body["token"];
      } else {
        this.connected == false;
        retour = -1;
      }

    },
      (error) => {


      },
      () => {
        console.log(this.token);
        console.log(this.connected);
      });

    return retour;
  }

  public getIfConnected() {
    return this.connected;
  }


  public getData(url){
    console.log(this.lien + url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.get(this.lien + url, httpOptions)
  }
}
