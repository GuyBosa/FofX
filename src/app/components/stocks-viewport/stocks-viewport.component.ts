import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListRange } from '@angular/cdk/collections';

import { Stock } from '../../models';

@Component({
  selector: 'stocks-viewport',
  templateUrl: './stocks-viewport.component.html',
  styleUrls: ['./stocks-viewport.component.css']
})
export class StocksViewportComponent implements OnInit {
  @Input() stock: Stock[] = [];
  @Output() stockSelected = new EventEmitter<Stock>();

  stockSlice:  Stock[] = [];

  constructor() { }

  ngOnInit() {
  }

  updateStockSlice(range: ListRange) {
    this.stockSlice = this.stock.slice(range.start, range.end);
  }

}
