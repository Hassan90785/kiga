import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-second',
  templateUrl: './banner-second.component.html',
  styleUrls: ['./banner-second.component.css']
})
export class BannerSecondComponent implements OnInit {
  @Input() indicator = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
