import { ApiConnectionService } from './../api-connection.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() apiConnection: ApiConnectionService;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  

}
