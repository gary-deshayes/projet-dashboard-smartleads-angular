import { ApiConnectionService } from './../api-connection.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quality-crm',
  templateUrl: './quality-crm.component.html',
  styleUrls: ['./quality-crm.component.scss']
})
export class QualityCrmComponent implements OnInit {

  @Input() apiConnection: ApiConnectionService;

  private loading = false;
  private data: any;
  private url = "api/contacts/indiceCRM"

  constructor() { }

  ngOnInit() {
    if(this.apiConnection.getIfConnected()){
      this.getDataCrm();
    }
  }

  getDataCrm(){
    this.loading = true;
    this.apiConnection.getData(this.url).subscribe((dataApi) => {
      this.data = dataApi;
      this.loading = false;
      console.log(this.data);


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
