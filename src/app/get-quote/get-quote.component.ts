import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal(event: number) {
    this.totalCost = Math.abs(this.secondStoryAndUp) * 6 + Math.abs(this.groundFloor) * 4 + Math.abs(this.screens * 1);
  }

}
