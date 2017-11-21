import { Injectable } from '@angular/core';

@Injectable()
export class BestService {
  canShowReserveModal: boolean = false;

  constructor() { }

  showReserveModal(value) {
    return this.canShowReserveModal = value;
  }

  hideReserveModal(value) {
    return this.canShowReserveModal = value;
  }

  getReserveModal() {
    console.log('service', this.canShowReserveModal)
    return this.canShowReserveModal;
  }

}
