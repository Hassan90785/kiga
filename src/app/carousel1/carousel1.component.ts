import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.css']
})
export class Carousel1Component implements OnInit {
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
        img: 'assets/carousel/img5.png',
        bg: '#01723C',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 1,
        img: 'assets/carousel/img5.png',
        bg: '#143C29',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 2,
        img: 'assets/carousel/img5.png',
        bg: '#182F24',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 3,
        img: 'assets/carousel/img5.png',
        bg: '#5D5F5E',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 4,
        img: 'assets/carousel/img5.png',
        bg: '#01723C',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 5,
        img: 'assets/carousel/img5.png',
        bg: '#143C29',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
      {
        id: 6,
        img: 'assets/carousel/img5.png',
        bg: '#182F24',
        title: 'Fingerspiel',
        label: 'Hörst du den Dino schmatzen?'
      },
    ];


  }
}
