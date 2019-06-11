import { Component, OnInit, Input } from '@angular/core';
import { ApiConnectionService } from './../api-connection.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private statistiques: any = {};

  private dateJour: any;

  @Input() apiConnection: ApiConnectionService;

  logoHafa = "../../assets/img/logoHafa.png";

  constructor() { }

  ngOnInit() {
    
    let tab_days = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    let tab_month = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    let now = new Date();

    let annee = now.getFullYear();
    let mois = tab_month[now.getMonth()];
    let jourNombre = now.getDate();
    let jourLettre = tab_days[now.getDay()];

    this.dateJour = jourLettre + " " + jourNombre.toString() + " " + mois + " " + annee.toString();

  }

}
