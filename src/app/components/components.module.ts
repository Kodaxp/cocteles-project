import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerLogoComponent } from './banner-logo/banner-logo.component';
import { CardCoctelesComponent } from './card-cocteles/card-cocteles.component';

@NgModule({
  declarations: [BannerLogoComponent, CardCoctelesComponent],
  imports: [CommonModule],
  exports: [BannerLogoComponent, CardCoctelesComponent]
})
export class ComponentsModule {}
