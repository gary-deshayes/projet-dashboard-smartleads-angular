import { Component, OnInit, Input } from '@angular/core';
import { ApiConnectionService } from './../api-connection.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private statistiques: any = {};

  @Input() apiConnection: ApiConnectionService;

  logoHafa = "../../assets/img/logoHafa.png";

  constructor() { }

  ngOnInit() {
    if (this.apiConnection.getIfConnected()) {
      this.getContactsActifs();
    }
  }

  getContactsActifs() {
    let data: any;
    this.apiConnection.getData("api/contacts/totalActif").subscribe((dataApi) => {
      data = dataApi;
    },
      (error) => {

      },
      () => {
        
        this.statistiques['contacts_actives'] = data
        console.log(this.statistiques);
      });
  }

}
