import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-crm',
  templateUrl: './quality-crm.component.html',
  styleUrls: ['./quality-crm.component.scss']
})
export class QualityCrmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = {
      chart: {
          height: 230,
          type: 'radialBar',
      },
  
      series: [50],
      labels: ["Indice de qualité CRM"],
      colors: ["#ffa200"],
      plotOptions: {
          radialBar: {
              startAngle: -90,
              endAngle: 90,
              hollow: {
                  margin: 15,
                  size: "70%"
              },
  
              dataLabels: {
                  showOn: "always",
                  name: {
                      offsetY: 20,
                      show: true,
                      color: "#999999",
                      fontSize: "12px",
                      fontWeight: "bold"
                  },
                  value: {
                      offsetY: -22,
                      color: "#999999",
                      fontSize: "28px",
                      show: true
                  }
              }
          }
      },
  
      stroke: {
          lineCap: "round",
      },
  }
  
  var chart = new ApexCharts(
      document.querySelector("#chart-circle"),
      options
  );
  
  chart.render();
  }

}
