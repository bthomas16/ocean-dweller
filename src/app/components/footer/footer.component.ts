import { Component, OnInit } from '@angular/core';
import { BestService } from '../../services/best.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  canShowReserveModal: boolean = false;

  constructor(private bestService: BestService) { }

  showModal() {
    let value = true;
    this.canShowReserveModal = true;
    this.bestService.hideReserveModal(value);
  }

  ngOnInit() {
  }

}
