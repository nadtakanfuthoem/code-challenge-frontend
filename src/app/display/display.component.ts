import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AppService } from './../app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
	searchText;
	title = 'Fetch data from RESTful API';
	data$: Observable<Object>;

  constructor(
		private appService: AppService
	) { }

  ngOnInit(): void {
		this.appService.fetchData()
		.subscribe(val => {
			this.data$ = val['results'];
		})
  }

}
