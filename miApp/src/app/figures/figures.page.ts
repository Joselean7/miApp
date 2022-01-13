import { Router } from '@angular/router';
import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Keyboard, Pagination, Scrollbar, SwiperOptions, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom,EffectFade, IonicSlides ]);


SwiperCore.use([ Pagination]);
@Component({
  selector: 'app-figures',
  templateUrl: './figures.page.html',
  styleUrls: ['./figures.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiguresPage implements  AfterContentChecked{
  @ViewChild('swiper') swiper:SwiperComponent;

  config: SwiperOptions = {
    effect: 'fade',
    //slidesPerView: 'auto',
    //pagination: true
    scrollbar: true
  }
  images = [
    '../../../assets/img/foto1.png',
    '../../../assets/img/foto2.png'
  ];

  constructor() { }

 ngAfterContentChecked(): void{
     if(this.swiper){
       this.swiper.updateSwiper({})
     }
 }
 swiperSlideChanged(e){
   console.log('changed: ', e);
 }
}
