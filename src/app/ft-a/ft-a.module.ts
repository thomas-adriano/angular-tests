import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtARoutingModule } from './ft-a-routing.module';
import { FtAComponent } from './ft-a.component';

@NgModule({
  imports: [
    CommonModule,
    FtARoutingModule
  ],
  declarations: [FtAComponent]
})
export class FtAModule { }
