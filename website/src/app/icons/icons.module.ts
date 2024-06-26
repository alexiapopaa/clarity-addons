import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { UtilsModule } from '../utils/utils.module';
import { IconsGetStartedComponent } from './icons-get-started/icons-get-started.component';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsSetsComponent } from './icons-sets/icons-sets.component';
import { IconsComponent } from './icons.component';
import { IconsLogosComponent } from './icons-logos/icons-logos.component';

@NgModule({
  declarations: [IconsComponent, IconsSetsComponent, IconsGetStartedComponent, IconsLogosComponent],
  imports: [CommonModule, ClarityModule, IconsRoutingModule, UtilsModule],
  providers: [],
})
export class IconsModule {}
