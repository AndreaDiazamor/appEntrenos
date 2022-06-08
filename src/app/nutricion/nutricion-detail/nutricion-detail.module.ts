import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricionDetailPageRoutingModule } from './nutricion-detail-routing.module';

import { NutricionDetailPage } from './nutricion-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricionDetailPageRoutingModule
  ],
  declarations: [NutricionDetailPage]
})
export class NutricionDetailPageModule {}
