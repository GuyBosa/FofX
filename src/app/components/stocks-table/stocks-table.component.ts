import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Stock } from '../../models';

@Component({
  selector: 'stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent implements OnInit {
  @Input() set stock(data: Stock[]) {
    this.dataSource.data = data;
  }
  @Output() stockSelected = new EventEmitter<Stock>();

  readonly displayedColumns = ['stock_id', 'date', 'value'];
  readonly dataSource = new MatTableDataSource<Stock>();

  constructor() { }

  ngOnInit() {
  }

}
