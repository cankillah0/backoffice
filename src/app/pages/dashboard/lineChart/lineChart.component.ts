import {Component} from '@angular/core';

import {LineChartService} from './lineChart.service';
import {SpinService} from "../../../services/spinService";
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

import 'amcharts3';
import 'amcharts3/amcharts/plugins/responsive/responsive.js';
import 'amcharts3/amcharts/serial.js';

import 'ammap3';
import 'ammap3/ammap/maps/js/worldLow';

@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.html',
  styleUrls: ['./lineChart.scss'],
  providers:[SpinService]
})
export class LineChart {

  chartData:Object;
  spinsData:Array<Object>;
  _baConfig:any;
  chart:any;

  constructor(private service : SpinService, s : LineChartService, _baConfig:BaThemeConfigProvider) {
    this._baConfig = _baConfig;
    this.chartData = this.getProvider();
    service.getSpins().then(this.onSpinsReceived.bind(this));
  }

  onSpinsReceived(data){
    for (let i = 0; i < data.length; i++){
      data[i]["num"] = i;
    }
   // this.spinsData = data;
    this.chartData = data;
    this.chart.dataProvider = data;//this.chartData;
    //this.updateProvider(this.chartData);

  }

  initChart(chart:any) {
    /*let zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }*/
    this.chart = chart;
    this.chart.dataProvider = this.chartData;
  }

  updateProvider(data){
    /*AmCharts.updateChart(this.chart, () => {
      this.chart.dataProvider = data;
    });*/
    //let chart = AmCharts.makeChart({}, {});
  }

  getProvider(){
    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      responsive: {
        'enabled': true
      },
      dataProvider: [
        {"num" : '0', "balance" : 1000},
        {"num" : '1', "balance" : 1100},
        {"num" : '2', "balance" : 1300},
        {"num" : '3', "balance" : 1600},
        {"num" : '4', "balance" : 800},

        {"num" : 5, "balance" : 1800},
        {"num" : 6, "balance" : 1600},
        {"num" : 7, "balance" : 1460},
        {"num" : 8, "balance" : 900},
        {"num" : 9, "balance" : 800},
        {"num" : 10, "balance" : 800},

        ],
      categoryField: 'num',
      categoryAxis: {
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        startOnAxis : true
      },
      valueAxis:{
        baseValue : 0
      },
      valueAxes: [
        {
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText,
          baseValue : 0,
          minimum : 0
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'balance',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }

}
