import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  showLoader: boolean = true;

  constructor() { }

  loader() {
    this.showLoader = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loader();
    }, 800)
  }

}
