import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { NavaBarComponent } from './nava-bar/nava-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavaBarComponent],
  imports: [CommonModule, ShareRoutingModule, MatToolbarModule],
  exports: [NavaBarComponent],
})
export class ShareModule {}
