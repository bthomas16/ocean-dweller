import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-craftsmenship',
  templateUrl: './craftsmenship.component.html',
  styleUrls: ['./craftsmenship.component.css']
})
export class CraftsmenshipComponent implements OnInit {
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
