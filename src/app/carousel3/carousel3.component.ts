import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.css']
})
export class Carousel3Component  implements OnInit {
  responsiveOptions: any[] = [];
  items: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
        showArrows: true
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 1,
        showArrows: true
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
        showArrows: true
      }
    ];
    this.items = [
      {
        id: 0,
        img: 'assets/carousel/img1.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 1,
        img: 'assets/carousel/img2.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 2,
        img: 'assets/carousel/img3.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 3,
        img: 'assets/carousel/img4.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 4,
        img: 'assets/carousel/img1.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 5,
        img: 'assets/carousel/img2.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 6,
        img: 'assets/carousel/img3.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
    ];


  }
}
