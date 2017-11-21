import { Component, OnInit } from '@angular/core';
import { BestService} from '../../../services/best.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  Watches;
  indexValue = 0;
  currentImg = 0;
  assetsFolder = '../../../assets/';
  canShowReserveModal: boolean = false;

  constructor(private bestService: BestService) {
    this.Watches = [
    {
      watch:
      {
        name: 'Ocean Dweller',
        price: '$485',
        specs:
          {
            movement: 'Seagul ST36C',
            diameter: '44mm',
            waterResistance: '10atm',
            lugWidth: '22mm',
            case: '316L SS'
          },
        imgs:[
          this.assetsFolder + 'sample1.jpeg',
          this.assetsFolder + 'sample1-1.jpg',
          this.assetsFolder + 'sample1-2.jpeg',
          this.assetsFolder + 'sample1-3.jpg',
          this.assetsFolder + 'sample1-4.jp3g'
        ],
        writeUp1: 'The latest edition to the Ocean Dweller family - We proudly welcome the Ocean Dweller Limited Edition Lines.',
        writeUp2: 'A modern aged dive watch, the Ocean Dweller boasts a Seagull ST36C movement in a impermeable, sapphire crystal case. With the bright orange dive-style hands, you will be able to time your dive effectively while adding flare to your daily outfit.',
        writeUp3: 'A Timepiece for the 21st century, Ocean Dweller only relies on the highest quality manufacturing to complete our watches. With a 316l Stainless Steel case, 1 extra silicone band, 1 extra stainless steel band and a 2 year warranty - we are confident you will love this watch for every occassion.'
        }
      },
    {
      watch:
      {
        name: 'Sea Dweller',
        price: '$425',
        specs:
          {
            movement: 'ETA 2824',
            diameter: '40mm',
            waterResistance: '10atm',
            lugWidth: '20mm',
            case: '316L SS'
        },
      imgs:[
        this.assetsFolder + 'sample2.jpg',
        this.assetsFolder + 'sample2-1.jpg',
        this.assetsFolder + 'sample2-2.jpeg',
        this.assetsFolder + 'sample2-3.jpeg',
        this.assetsFolder + 'sample2-4.jpg'
      ],
      writeUp1: 'A beautiful timepiece inspired by elegant adventuring and our history as a human-species in tandem with Mechanical watches.',
      writeUp2: 'Our passions are endless and our designs have no predefined set of boundaries. Using only top quality materials our watches aim to take your breathe away with each sweep. Boasting a swiss ETA 2824-2 movement inside of a weatherd, 316l Stainless Steel case and a 2 year warranty.',
      writeUp3: 'A Timepiece for the modern afficianado, the Sea Dweller enables you go on a 300m dive and to your black tie event later that same night. Truly a watch worth wearing.'
      }
    }
  ]
}

change() {
  this.currentImg = 0;
  if(this.indexValue === 1) {
    this.indexValue = 0
    return true;
  }
  this.indexValue = 1;
}

showModal() {
  let value = true;
  console.log(value);
  this.canShowReserveModal = true;
  this.bestService.showReserveModal(value);
}

hideModal() {
  let value = false;
  this.canShowReserveModal = false;
  this.bestService.hideReserveModal(value);
}

ngAfterContentChecked() {
  this.canShowReserveModal = this.bestService.getReserveModal();
  console.log(this.canShowReserveModal);
}


  ngOnInit() {
  }

}
