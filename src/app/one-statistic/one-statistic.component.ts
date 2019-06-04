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



  constructor() {


  }

  ngOnInit() {
    if (this.dataToCall == 5) {
      this.libelle = "Contacts actifs";
      this.url = "api/contacts/totalActif";
      this.getDataStats();
    }

  }

  getDataStats() {
    this.apiConnection.getData(this.url).subscribe((dataApi) => {
      this.data = dataApi;
    },
      (error) => {

      },
      () => {

        console.log(this.data.value);
      });
  }

}
