import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public unitHeight: number;
  public firstResizeFlag: boolean;
  ngOnInit(): void {
    this.options = {

      draggable: {
        enabled: true,
      },

      resizable: {
        enabled: true
      },
      swap: false,
      pushItems: true,
      maxCols: 4
    };

    this.dashboard = [
      {
        cols: 2, rows: 2, y: 0, x: 0, componentName: 'app-chart',
        componentType: ChartComponent,
      },
      { cols: 2, rows: 2, y: 7, x: 6 },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 2, rows: 2, y: 3, x: 5 },
      { cols: 2, rows: 2, y: 2, x: 0 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 1, rows: 1, y: 2, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 6 }
    ];
  }


  changedOptions(): void {
    this.options.api.optionsChanged();
  }

  removeItem(item): void {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    const item: GridsterItem = { cols: 2, rows: 2, y: 0, x: 2 };
    this.dashboard.push(item);
  }
}
