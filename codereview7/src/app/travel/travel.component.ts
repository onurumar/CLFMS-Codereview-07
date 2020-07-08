import { Component, OnInit } from '@angular/core';

import { offers } from '../offers';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
		offers = offers;

  constructor() { }

  ngOnInit(): void {
  }

}


