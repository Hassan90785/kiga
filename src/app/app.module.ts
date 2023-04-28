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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BannerSecondComponent,
    NewsLetterComponent,
    SocialComponent,
    FooterComponent,
    Carousel3Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
