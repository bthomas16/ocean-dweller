import { Component, OnInit } from '@angular/core';
import { BestService } from '../../services/best.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
canShowReserveModal: boolean = false;

  constructor(private bestService: BestService) { }

  hideModal() {
    let value = false;
    this.canShowReserveModal = false;
    this.bestService.hideReserveModal(value);
  }

  ngOnInit() {
  }

}
