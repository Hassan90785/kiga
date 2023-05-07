import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {
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
        img: 'assets/carousel/main-banner.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 1,
        img: 'assets/carousel/main-banner.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      },
      {
        id: 1,
        img: 'assets/carousel/main-banner.png',
        title: 'Sticker',
        label: 'Mitmachlieder von Max Mustermann'
      }

    ];


  }
}
