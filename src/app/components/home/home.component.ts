import { Component, OnInit, AfterContentChecked, trigger, state, transition, style, animate } from '@angular/core';

import { BestService} from '../../services/best.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  trigger('modalSignUpFade', [
    state('normal', style({transform: 'translateY(-200px)',  transition: 'all .5s ease-in-out', opacity: 0
    })),
    state('signUpFadein', style({transition: 'all .5s ease-in-out', opacity: 1
    })),
    transition('normal <=> *', animate(400))
  ])
]
})

export class HomeComponent implements OnInit, AfterContentChecked {
  showLoader: boolean = true;
  canShowReserveModal: boolean = false;
  signUpState: string = 'normal';

  constructor(private bestService: BestService) {
    this.loader();
  }

  animateSignUpOpen() {
    this.signUpState = 'signUpFadein';
  }

  animateSignUpClose() {
    this.signUpState = 'normal';
  }

  hideModal() {
    this.animateSignUpClose();
    let value = false;
    this.canShowReserveModal = false;
    this.bestService.hideReserveModal(value);
  }

  ngAfterContentChecked() {

    this.canShowReserveModal = this.bestService.getReserveModal();
    if(this.canShowReserveModal === true) {
    this.animateSignUpOpen();
    return true;
  }
  this.hideModal();
  return true;
  }

  loader() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000)
  }

  ngOnInit() {
    this.signUpState = 'normal';
  }

}
