import { Component, OnInit } from '@angular/core';
import { secondStoryCost, groundFloorCost } from '../constants';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {
  secondStoryAndUp: number = null;
  groundFloor: number = null;
  screens: number = null;
  totalCost: number = 0;
  groundFloorCost: number = groundFloorCost;
  secondStoryCost: number = secondStoryCost;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal(event: number) {
    this.totalCost = Math.abs(this.secondStoryAndUp) * this.secondStoryCost + Math.abs(this.groundFloor) * this.groundFloorCost + Math.abs(this.screens * 1);
  }

}
