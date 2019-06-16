import 'apexcharts';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        var options = {
        chart: {
            height: 350,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        series: [{
            name: 'Contact(s) ajouté(s)',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            //Pour avoir le point en haut a droite
            name: "",
            data: []
        }
        ],
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
    
            size: 6
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }
    
    var chart = new ApexCharts(
        document.querySelector("#chart-line"),
        options
    );
    chart.render();
  }

}
