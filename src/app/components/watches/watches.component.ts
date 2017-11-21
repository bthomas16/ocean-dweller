import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
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
