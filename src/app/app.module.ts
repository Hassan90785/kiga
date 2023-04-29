import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BannerSecondComponent } from './banner-second/banner-second.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import {CarouselModule} from "primeng/carousel";
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BannerSecondComponent,
    NewsLetterComponent,
    SocialComponent,
    FooterComponent,
    Carousel3Component,
    Carousel2Component,
    Carousel1Component,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
