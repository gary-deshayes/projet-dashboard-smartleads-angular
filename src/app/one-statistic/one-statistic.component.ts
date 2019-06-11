import { ApiConnectionService } from './../api-connection.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-statistic',
  templateUrl: './one-statistic.component.html',
  styleUrls: ['./one-statistic.component.scss']
})
export class OneStatisticComponent implements OnInit {

  @Input() apiConnection: ApiConnectionService;
  @Input() dataToCall: any;

  private url: any;
  private data: any;
  private libelle: any;
  private logo: any;
  private loading = false;



  constructor() {


  }

  ngOnInit() {
    if (this.dataToCall == 1) {
      this.libelle = "Nouveaux contacts";
      this.url = "api/contacts/newContactsSince/month";
      this.getDataStats();
      this.logo = "fas fa-user-friends fa-lg";
    }
    if (this.dataToCall == 2) {
      this.libelle = "Nouvelles entreprises";
      this.url = "api/company/newCompaniesSince/month";
      this.getDataStats();
      this.logo = "fas fa-building fa-lg";
    }
    if (this.dataToCall == 3) {
      this.libelle = "Nouveaux emails";
      this.url = "api/operationsent/newMailsSince/month";
      this.getDataStats();
      this.logo = "fas fa-envelope fa-lg";
    }
    if (this.dataToCall == 4) {
      this.libelle = "Opérations actives";
      this.url = "api/operations/operationsActiveSince/month";
      this.getDataStats();
      this.logo = "fas fa-star fa-lg";
    }
    if (this.dataToCall == 5) {
      this.libelle = "Contacts actifs";
      this.url = "api/contacts/totalActif";
      this.getDataStats();
      this.logo = null;
    }
    if (this.dataToCall == 6) {
      this.libelle = "Entreprises actives";
      this.url = "api/company/totalActif";
      this.getDataStats();
      this.logo = null;
    }
    if (this.dataToCall == 7) {
      this.libelle = "Emails";
      this.url = "api/operationsent/totalMails";
      this.getDataStats();
      this.logo = null;
    }
    if (this.dataToCall == 8) {
      this.libelle = "Opérations réalisées";
      this.url = "api/operations/operationsRealized";
      this.getDataStats();
      this.logo = null;
    }

  }

  getDataStats() {
    this.loading = true;
    this.apiConnection.getData(this.url).subscribe((dataApi) => {
      this.data = dataApi;
      this.loading = false;


    },
      (error) => {
        if(error.status == 401){
          this.apiConnection.deconnected();
          localStorage.setItem('token', undefined);

        }

      this.loading = false;

      },
      () => {
        this.loading = false;
    });
  }

}
