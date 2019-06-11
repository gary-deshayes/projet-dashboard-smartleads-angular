import { ApiConnectionService } from './api-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'projet-dashboard-smartleads-angular';

  constructor(private apiConnection: ApiConnectionService) { 
    

    console.log(apiConnection.getIfConnected());

  }

  ngOnInit() {
  }
}
