import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiguresPageRoutingModule } from './figures-routing.module';

import { FiguresPage } from './figures.page';

import { SwiperModule  } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiguresPageRoutingModule, 
    SwiperModule
  ],
  declarations: [FiguresPage]
})
export class FiguresPageModule {}
