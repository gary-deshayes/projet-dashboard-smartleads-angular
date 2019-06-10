import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perf-operation',
  templateUrl: './perf-operation.component.html',
  styleUrls: ['./perf-operation.component.scss']
})
export class PerfOperationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Donut Component Dashboard
    var options = {
      chart: {
          type: 'donut',
          height: 300
      },
      dataLabels: {
          enabled: false,
      },
      labels: ['Ouvert', 'Non ouvert', 'Délivré', 'Ajout/Mise à jour des données'],
      plotOptions: {
          pie: {
              size: 80,
              donut: {
                  size: '80%'
              }
          }
      },
      legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: 'bottom',
          horizontalAlign: 'left',
          offsetY: 30,
          itemMargin: {
              horizontal: 0,
              vertical: 20
          },
          labels: {
              colors: ['#B3B3B3']
          },
      },
      series: [44, 55, 41, 100],
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
    }

    var chart = new ApexCharts(
      document.querySelector("#chart"),
      options
    );
    chart.render();
  }
}
